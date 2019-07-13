# coding:utf-8

# 拷贝语言版本相关资源
#param1 待拷贝的目录
#param2 拷贝到的目标目录

import sys
import os
import imghdr

param0=sys.argv[1]
param1=sys.argv[2]
if not param0 :
    print("未输入待拷贝目录")
    exit()
print("当前目录："+param0)

if not param1 :
    print("未输入目标目录")
    exit()
print("目标目录："+param1)

allfile = []
fileName = []

def copyFileOper(cur_file):
    boo=cur_file in fileName
    if boo == True:
        # print(fileName.index(cur_file))
       return allfile[fileName.index(cur_file)] 
    else:
        return boo  


def get_all_file(rawdir,oper):
    allfilelist=os.listdir(rawdir)
    for f in allfilelist:
        if f[0] == ".":
            continue
        filepath=os.path.join(rawdir,f)
        if os.path.isdir(filepath):
            get_all_file(filepath,oper)
        else:
            if oper == "1":
                # 当前获取文件
                index=filepath.index("resource")+9
                fileStr=filepath[index:]
                fileName.append(fileStr)
                allfile.append(filepath)
            else:
                # 当前执行拷贝动作
                index2=filepath.index("resource")+9
                fileStr2=filepath[index2:]
                new_path = copyFileOper(fileStr2)
                if not (new_path == False):
                    os.system("mv -f "+new_path+" "+rawdir )
                    

get_all_file(param0,"1")
get_all_file(param1,"0")