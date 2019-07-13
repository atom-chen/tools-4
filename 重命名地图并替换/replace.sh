#!/bin/bash

# param1 文件路径  
# param2 排列最大值索引

if [[ "$1"&&"$2" ]];then
    echo "目录为---->"$1"------索引值为----->"$2
else
    echo "无效的传参"
    exit 0
fi 

echo "步入-目录获取步骤"


fileArr1=()
for file1 in `ls $1` 
do
    str=${file1%.*}
    str2=${str##*_}
    index=$((10#$str2-1))
    fileArr1[$index]=$file1
done

cd $1
index=0
index2=0
for i in "${!fileArr1[@]}";   
do   
    index2=$(($index2+1))
    
    name=$index"_"$(($index2-1))".jpg"
    if [[ $index2 -gt $2 ]];then
        index2=0
        index=$(($index+1))
    fi
    echo "重命名文件--》"${fileArr1[$i]}"---to----》"$name
    mv -f ${fileArr1[$i]}  $name
done 

echo "-------------End-------------"



