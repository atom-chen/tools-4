# coding=utf-8
# Python 2.7.10

import os
import sys
import util
import json
import resCopy

version = 1

localVersionJsonData = False
localVersionCrcJsonData = False

resourcePath = "resource"

# 本地配置文件
localPfCfgFile = open(os.path.join(resourcePath, "pfCfg.json"), 'rb')
localPfCfgJsonData = json.loads(localPfCfgFile.read())
version = localPfCfgJsonData["version"] + 1
localPfCfgJsonData["version"] = version
pfCfgFile = open(os.path.join(resourcePath, "pfCfg.json"), 'w')
pfCfgFile.write(json.dumps(localPfCfgJsonData))
pfCfgFile.close()

# 本地版本文件
if os.path.exists(os.path.join(resourcePath, "version.json")):
    localVersionFile = open(os.path.join(resourcePath, "version.json"), 'rb')
    localVersionJsonData = json.loads(localVersionFile.read())
# 本地版本Crc文件
if os.path.exists(os.path.join(resourcePath, "versionCrc.json")):
    localVersionCrcFile = open(os.path.join(resourcePath, "versionCrc.json"), 'rb')
    localVersionCrcJsonData = json.loads(localVersionCrcFile.read())

command = ''
for i in range(1, len(sys.argv)):
    command = command+" "+sys.argv[i]
command = "%s --version %s" %(command, version)
util.run_cmd(command)

path = "bin-release/web/%s/" %(version)

manifestFile = open(os.path.join(path, "manifest.json"), 'rb')
jsonData = json.loads(manifestFile.read())
initial = jsonData["initial"]

libsJS = ''
for i in range(len(initial)):
    jsFile = open(os.path.join(path, initial[i]), 'rb')
    jsCode = jsFile.read()
    libsJS += jsCode + '\n'
libsFile = open(path+'libs.min.js', 'w')
libsFile.write(libsJS)
libsFile.close()

util.rmdir(os.path.join(path, "libs"))
util.rmdir(os.path.join(path, "resource/eui_skins"))

def del_exml_files(path):
    for root , dirs, files in os.walk(path):
        for name in files:
            if name.endswith(".exml") or name == "versionCrc.json":
                os.remove(os.path.join(root,name))
del_exml_files(os.path.join(path, "resource"))

filesVersionJsonData = json.loads("{}")
filesVersionCrcJsonData = json.loads("{}")

def changeVer(path, key):
    filesVersionCrcJsonData[key] = util.getCrc32(path)
    if localVersionCrcJsonData and key in localVersionCrcJsonData and localVersionJsonData and key in localVersionJsonData:
        if localVersionCrcJsonData[key]==filesVersionCrcJsonData[key]:
            filesVersionJsonData[key] = localVersionJsonData[key]
        else:
            filesVersionJsonData[key] = localVersionJsonData[key]+1 
    else:
        filesVersionJsonData[key] = 1

manifestFile = open(os.path.join(path, "manifest.json"), 'w')
changeVer(os.path.join(path, "main.min.js"), "main.min.js")
jsonData["game"] = ["main.min.js?v=%s" %(filesVersionJsonData["main.min.js"])]
changeVer(os.path.join(path, "libs.min.js"), "libs.min.js")
jsonData["initial"] = ["libs.min.js?v=%s" %(filesVersionJsonData["libs.min.js"])]
manifestFile.write(json.dumps(jsonData))
manifestFile.close()

for root, dirs, files in os.walk(os.path.join(path, "resource")):
    for name in files:
        filePath = os.path.join(root, name)
        key = filePath[len(path):]
        if (key in filesVersionCrcJsonData) :
            print "重复文件!!!", key
        changeVer(filePath, key)

# 本地版本
versionFile = open(os.path.join(resourcePath, "version.json"), 'w')
versionFile.write(json.dumps(filesVersionJsonData))
versionFile.close()
# 本地版本Crc
versionFile = open(os.path.join(resourcePath, "versionCrc.json"), 'w')
versionFile.write(json.dumps(filesVersionCrcJsonData))
versionFile.close()
# 发布版本
versionFile = open(os.path.join(path, "resource/version.json"), 'w')
versionFile.write(json.dumps(filesVersionJsonData))
versionFile.close()

#----------------------测试版本-------------------------
# resCopy.copy_files(os.path.join(path, ""), "../publish/zzcq")

print "发布完成,版本%s" %(version)