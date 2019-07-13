#!python
# -*- coding:UTF-8 -*-

import cv2
import sys
import os
import json
from PIL import Image, ImageFont, ImageDraw 


f=open('textures.json','rb')
# 
# textures.json 
# {
#   pikeman_texture:{
#       frames:{
#           [x,y,w,h],
#           [100,200,300,400],
#           ...
#       }
#   },
#   ...
# }
# 
#textureWay mark texture way to write info
# 0 project has data.js  and texture name has ...sheet
# 1 json，png
# 
jsonData = json.loads(f.read())

def createImage(createPath,imgPath,jsonItem,textureWay):
    if textureWay == 0:
        frames = jsonItem["frames"]
    elif textureWay == 1:
        frames = []
        f2=open(jsonItem,'rb')
        textureJson = json.loads(f2.read())
        prevFrames = textureJson['frames']
        itemarr = []
        if type(prevFrames) is list:
            for i in range(len(prevFrames)):
                itemFrame = prevFrames[i]["frame"]
                itemarr.append(itemFrame)
        else:
            for key in prevFrames:
                itemFrame = prevFrames[key]["frame"]
                itemarr.append(itemFrame)
        for j in range(len(itemarr)):
            frames.append([itemarr[j]["x"],itemarr[j]["y"],itemarr[j]["w"],itemarr[j]["h"]])
        
    operImg(frames,imgPath,createPath)

def operImg(frames,imgPath,createPath):
    image =  cv2.imread(imgPath)
    font = cv2.FONT_HERSHEY_SIMPLEX
    params = []
    frameIndex = 0
    for i in range(len(frames)):
        x = frames[i][0]
        y = frames[i][1]
        w = frames[i][2]+x
        h = frames[i][3]+y
        param1='frame:'+str(frameIndex)
        param2='w:'+str(frames[i][2]) 
        param3='h:'+str(frames[i][3])+param2
        param4='{x:'+str(x)+",y:"+str(y)+"}"
        if param4 in params:
            print("already exit")
        else:
            frameIndex += 1
            params.append(param4)
            cv2.putText(image,param1,(x+10,y+20), font, 0.3,(0,255,0),1)
            cv2.putText(image,param3,(x+10,y+40), font, 0.3,(0,255,0),1)
            cv2.putText(image,param4,(x+10,y+60), font, 0.3,(0,255,0),1)
            cv2.rectangle(image, (x, y), (w, h), (0, 255, 0), 1)
    cv2.imwrite(createPath, image)

def get_all_file(rawdir):
    allfilelist=os.listdir(rawdir)
    for f in allfilelist:
        if f[0] == ".":
            continue
        filepath=os.path.join(rawdir,f)
        if os.path.isdir(filepath):
            get_all_file(filepath)
        else:
            imgPath = filepath
            name_suffix = os.path.basename(imgPath)
            index = name_suffix.index(".")
            imgName=name_suffix[0:index]
            suffix = name_suffix[(index+1):]
            if not suffix == "json":
                createPath = os.path.dirname(imgPath)+"/"+imgName+"_mark.png"
                jsonstr = os.path.dirname(imgPath)+"/"+imgName+".json"
                if os.path.exists(jsonstr):
                    createImage(createPath,imgPath,jsonstr,1)
                else:
                    try:
                        jsonItem = jsonData[name_suffix]
                        createImage(createPath,imgPath,jsonItem,0)
                    except BaseException:
                        print("errror key"+name_suffix)
                    
           
get_all_file('res/')

# imgPath = sys.argv[1],
# x = sys.argv[2],
# y = sys.argv[3],
# w = sys.argv[4],
# h = sys.argv[5],
# end = sys.argv[6],
# name_suffix = os.path.basename(imgPath)
# index = name_suffix.index(".")
# imgName=name_suffix[0:index]
# createPath = os.path.dirname(imgPath)

# image = cv2.imread(imgPath)
# print (createPath+"/"+imgName+"_mark.png")
# cv2.rectangle(image, (x, y), (w, h), (0, 255, 0), 1)  

# cv2.imwrite(createPath+"/"+imgName+"_mark.png", image)

# import math

# import matplotlib.pyplot as plt
# import numpy as np
# from PIL import Image, ImageDraw

# def drawFunc(filename,result):
#     img = Image.open(filename)
#     w,h=img.size
#     draw = ImageDraw.Draw(img)
#     result=np.array(result)
#     x=result[0][0]
#     y=result[0][1]
#     angle=result[0][2]
#     height=result[0][3]
#     width=result[0][4]

#     anglePi = -angle*math.pi/180.0
#     cosA = math.cos(anglePi)
#     sinA = math.sin(anglePi)

#     x1=x-0.5*width
#     y1=y-0.5*height

#     x0=x+0.5*width
#     y0=y1

#     x2=x1
#     y2=y+0.5*height

#     x3=x0
#     y3=y2

#     x0n= (x0 -x)*cosA -(y0 - y)*sinA + x
#     y0n = (x0-x)*sinA + (y0 - y)*cosA + y

#     x1n= (x1 -x)*cosA -(y1 - y)*sinA + x
#     y1n = (x1-x)*sinA + (y1 - y)*cosA + y

#     x2n= (x2 -x)*cosA -(y2 - y)*sinA + x
#     y2n = (x2-x)*sinA + (y2 - y)*cosA + y

#     x3n= (x3 -x)*cosA -(y3 - y)*sinA + x
#     y3n = (x3-x)*sinA + (y3 - y)*cosA + y


#     draw.line([(x0n, y0n),(x1n, y1n)], fill=(0, 0, 255))
#     draw.line([(x1n, y1n),(x2n, y2n)], fill=(255, 0, 0))
#     draw.line([(x2n, y2n),(x3n, y3n)],fill= (0,0,255))
#     draw.line([(x0n, y0n), (x3n, y3n)],fill=(255,0,0))

#     plt.imshow(img)
#     plt.show()

# drawFunc('res/pikeman_texture.png',[[0,0,0,1,1]])