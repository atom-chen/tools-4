# -*- coding: utf-8 -*-
#songyuyang mac
#操作注意，需传入项目目录#
# pip 是 Python 包管理工具，该工具提供了对Python 包的查找、下载、安装、卸载的功能
# Python 2.7.9 + 或 Python 3.4+ 以上版本都自带 pip 工具。
# 通过pip安装pillow跟wheel。网址：https://blog.csdn.net/qq_33485434/article/details/80422374
 
import os,sys
import string
from PIL import Image
import json
 
# 切割图片
def splitimage(src, rownum, colnum, dstpath):
    img = Image.open(src)
    w, h = img.size
    rownum = int(rownum)
    colnum = int(colnum)
    if rownum <= h and colnum <= w:
        print('Original image info: %sx%s, %s, %s' % (w, h, img.format, img.mode))
        print('图片切割')
 
        s = os.path.split(src)
        if dstpath == '':
            dstpath = s[0]
        fn = s[1].split('.')
        basename = fn[0]
        # ext = fn[-1]
        ext = "jpg"
        num = 0
        rowheight = h // rownum
        colwidth = w // colnum
        for r in range(rownum):
            for c in range(colnum):
                box = (c * colwidth, r * rowheight, (c + 1) * colwidth, (r + 1) * rowheight)
                # img.crop(box).save(os.path.join(dstpath, basename + '_' + str(num) + '.' + ext), ext)
                img.crop(box).save(os.path.join(dstpath, str(r)+ '_' + str(c) + '.' + ext))
                num = num + 1
 
        print('共生成 %s 张小图片。' % num)
    else:
        print('error')
 
# 创建文件夹
def mkdir(path):
    # 去除首位空格
    path = path.strip()
    # 去除尾部 \ 符号
    path = path.rstrip("\\")
 
    # 判断路径是否存在
    # 存在     True
    # 不存在   False
    isExists = os.path.exists(path)
 
    # 判断结果
    if not isExists:
        os.makedirs(path)
        print (path+' 创建成功')
        return True
    else:
        print (path + ' 目录已存在')
        return False
 
 
# folder = '/Users/youxi123/Downloads/baizhanchuanqi' # 存放图片的文件夹
# folder = raw_input("图片位置完整路径:").strip()
folder = os.getcwd()+"/map"
path = os.listdir(folder)
# qietu = raw_input("切图位置完整路径:").strip()
qietu = os.getcwd()
# print(path)
filepath="/resource/map/"

file = open("config.json", "rb")
fileJson = json.load(file)
configs = fileJson["m"]["block"]
    
for each_bmp in path: # 批量操作
        first_name, second_name = os.path.splitext(each_bmp)
        each_bmp = os.path.join(folder, each_bmp)
        src = each_bmp
        
        deleteParams="/.";
        if deleteParams in src:
            continue
        print(src)
        print("文件名字："+first_name+second_name)
        # 定义要创建的目录
        mkpath = qietu +"/map/"+ first_name
        itemConfig = configs[first_name]
        # 调用函数
        mkdir(mkpath)
        if os.path.isfile(src):
            dstpath = mkpath
            if (dstpath == '') or os.path.exists(dstpath):
                # row = int(3) # 切割行数
                # col = int(4) # 切割列数
                row = itemConfig["row"]
                col = itemConfig["col"]
                if row > 0 and col > 0:
                    splitimage(src, row, col, dstpath)
                    os.system("rm -rf "+src)
                    os.system("cp -rf "+mkpath+"/ "+ sys.argv[1]+filepath+first_name+"/image")
                else:
                    print('无效的')
            else:
                print('图片保存目录 %s 不存在！' % dstpath)
        else:
            print('图片文件 %s 不存在！' % src)

