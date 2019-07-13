# coding=utf-8
# Python 2.7.10

import os
import shutil

# 复制路径
sourceDir = "/Users/wangwuyi/Downloads/resource"
# 粘贴路径
targetDir = "/Users/wangwuyi/Documents/BT/zzcqclient/h5Branch/skzm/resource"

def check_dir(src):
    src = os.path.normpath(src)
    if not os.path.exists(src):
        os.makedirs(src)
        pass

def copy_files(src, dst):
    src = os.path.normpath(src)
    dst = os.path.normpath(dst)
    
    if os.path.isdir(src):
        check_dir(dst)
        for item in os.listdir(src):
            path = os.path.join(src, item)
            if item.startswith(".") or item.startswith("~"):
                continue
            copy_files(path, os.path.join(dst, item))
    else:
        shutil.copy(src, dst)
    

if __name__ == "__main__":
    copy_files(sourceDir, targetDir)