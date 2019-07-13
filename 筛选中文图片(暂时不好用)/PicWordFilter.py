# coding:utf-8

# 记得替换其中的Token、图片地址或Base64信息。

import urllib, urllib2, base64,sys
import ssl
import json
import os
import cv2
import imghdr

param0=sys.argv[1]
if not param0 :
    print("未输入目录资源文件")
    exit()
print("当前目录："+param0)
#通用文字 高精度版url
common_high_url = 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic'
#通用文字  生僻字url
common_Rarely_url='https://aip.baidubce.com/rest/2.0/ocr/v1/general_enhanced'
# 通用文字  手写
common_hand_url=' https://aip.baidubce.com/rest/2.0/ocr/v1/handwriting'


#access_token 周期30天需要更换
access_token = '24.49979797b1a9958e9ce8250d2805c959.2592000.1557734863.282335-16010668'
url = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=' + access_token


#递归获取目录下的所有文件 并筛选图片文件  删除非图片文件
allfile = []
deleteFile=[]
def get_all_file(rawdir):
    allfilelist=os.listdir(rawdir)
    for f in allfilelist:
        if f[0] == ".":
            continue
        filepath=os.path.join(rawdir,f)
        if os.path.isdir(filepath):
            get_all_file(filepath)
        else:
            imgType = imghdr.what(filepath)
            if (imgType == "png" or imgType == "jpg" or imgType == "jpeg"):
                allfile.append(filepath)
            else:
                filepath=os.path.join(rawdir,f)
                deleteFile.append(filepath)

get_all_file(param0)

def deleteFileFun(str):
    for i in deleteFile:
        print("------------"+str+"----------"+i)
        os.remove(i)
deleteFileFun("删除非图片资源")

# 判断当前图片是否存在汉字
def judgeIfExistWord(filePath):
    # 二进制方式打开图文件
    f = open(r""+filePath, 'rb')
    # 参数image：图像base64编码
    img = base64.b64encode(f.read())
    params = {"image": img}
    params = urllib.urlencode(params)
    request = urllib2.Request(url, params)
    request.add_header('Content-Type', 'application/x-www-form-urlencoded')
    response = urllib2.urlopen(request)
    content = response.read()
    wordNum=0
    if (content):
        try:
            wordNum = json.loads(content)["words_result_num"]
        except:
            print(content)
    print('当前识别图片为-----》'+filePath+"-----结果为："+("true" if wordNum>0 else "false"))
    return wordNum

deleteFile=[]

for file in allfile:
    num=judgeIfExistWord(file)
    if num < 1:
        deleteFile.append(file)

deleteFileFun("删除未含有汉字的图片")


