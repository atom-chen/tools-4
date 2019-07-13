#!/usr/bin/python
# -*- coding: UTF-8 -*-
# util.py

import sys
import os
import os.path
import stat
import shutil
import subprocess

# from hashlib import md5, sha1
# from zlib import crc32
import binascii

reload(sys)
sys.setdefaultencoding('utf8')

def os_is_win32():
    return sys.platform == 'win32'

def os_is_mac():
    return sys.platform == 'darwin'

def os_is_linux():
    return 'linux' in sys.platform

def run_cmd(command):
    if os_is_win32():
        end = ""
    else:
        end = "\n"
    # print("%s" % command)

    ret = subprocess.call(command, shell=True)
    if ret != 0:
        message = "Error running command, return code: %s" % str(ret)
        raise Exception(message)

# def getMd5(filepath): #计算md5
#     mdfive = md5()
#     file = open(filepath, 'rb')
#     mdfive.update(file.read())
#     return mdfive.hexdigest()
 
# def getSha1(filepath): #计算sha1
#     sha1Obj = sha1()
#     file = open(filepath, 'rb')
#     sha1Obj.update(file.read())
#     return sha1Obj.hexdigest()
 
def getCrc32(filepath): #计算crc32
    file = open(filepath, 'rb')
    return binascii.crc32(file.read())

def rmdir(filePath):
    if os.path.exists(filePath):
        for fileList in os.walk(filePath):
            for name in fileList[2]:
                os.chmod(os.path.join(fileList[0],name), stat.S_IWRITE)
                os.remove(os.path.join(fileList[0],name))
        shutil.rmtree(filePath)
        return "delete ok"
    else:
        return "no filepath"