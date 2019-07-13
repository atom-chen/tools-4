# coding:utf-8

# 翻译脚本 生成的exml格式不正确  需要格式化一下

import sys
import os

param0=sys.argv[1]
if not param0 :
    print("未输入目录资源文件")
    exit()
print("当前目录："+param0)

#获取文件后缀名
def file_extension(path): 
  return os.path.splitext(path)[1]
#获取文件内容
def readContent(path):
    file_object=open(path)
    try:
        file_content = file_object.read()
        return file_content
    finally:
        file_object.close()
# 修改文件内容
def modifyContent(path,content):
    with open(path,"w") as f:
        f.write(str(content))
def get_all_file(rawdir):
    allfilelist=os.listdir(rawdir)
    for f in allfilelist:
        if f[0] == ".":
            continue
        filepath=os.path.join(rawdir,f)
        if os.path.isdir(filepath):
            get_all_file(filepath)
        else:
            suffix = file_extension(filepath)
            if suffix == ".exml":
                content=readContent(filepath)
                lastIndex=(content.rfind("</e:Skin>")+9)
                new_content=content[:lastIndex]
                modifyContent(filepath,new_content)
get_all_file(param0)