#!/usr/bin/env python
# coding: utf-8
from langconv import *
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
 
# 转换繁体到简体
def cht_to_chs(line):
    line = Converter('zh-hans').convert(line)
    line.encode('utf-8')
    return line
 
# 转换简体到繁体
def chs_to_cht(line):
    line = Converter('zh-hant').convert(line)
    line.encode('utf-8')
    return line
 

# line_cht='<>123asdasd把中文字符串進行繁體和簡體中文的轉換'
 
# ret_chs = "%s\n"%cht_to_chs(line_cht)
ret_cht = "%s\n"%chs_to_cht(unicode(sys.argv[1]))
 
# print("chs='%s'",ret_cht)
# print("cht='%s'",ret_cht)

print ret_cht
 
# file = open('ret.txt','w')
# # file.write(ret_chs)
# file.write(ret_cht)
# file.close()
