#!/bin/bash

releasePath='bin-release'

modulePath='libs/modules/'

scripts=('<script egret="lib"  src="libs/modules/egret/egret.min.js"></script>',
'<script egret="lib"  src="libs/modules/egret/egret.web.min.js"></script>',
'<script egret="lib"  src="libs/modules/game/game.min.js"></script>',
'<script egret="lib"  src="libs/modules/res/res.min.js"></script>',
'<script egret="lib"  src="libs/modules/tween/tween.min.js"></script>',
'<script egret="lib"  src="libs/modules/socket/socket.min.js"></script>',
'<script egret="lib"  src="libs/modules/eui/eui.min.js"></script>',
'<script egret="lib"  src="libs/modules/jszip/jszip.min.js"></script>',
'<script egret="lib" src="libs/modules/start/start.min.js"></script>')

egret publish 

cd $releasePath
fileArr=()
for dir in $(ls *)
do
    fileArr[${#fileArr[@]}]=$dir
done

MAX=${fileArr[0]}
for I in ${!fileArr[@]};
do
    if [[ ${MAX} -le ${fileArr[${I}]} ]];then
        
        MAX=${fileArr[${I}]}
    fi
done

copyPath=`pwd`'/web/'$MAX'/libs/modules/'
cd ..
filePath=`pwd`"/"$modulePath


cp -R ${filePath}/ceui ${copyPath}

cp -R ${filePath}/start ${copyPath}

cd `pwd`"/"${releasePath}"/web/"$MAX

strB='<script egret="lib"'
a=0;
cat index.html | while read line

do
    strA=$line
    result=$(echo $strA | grep "${strB}")
    if [[ "$result" != "" ]]
    then
        value=${scripts[$a]}
        echo $value
        a=$(($a+1))
        sed -i "" "s%$line%$value%g" `pwd`"/index.html"
        
    fi
    
done




