 /**
  * params
  * g[压缩混淆]
  * t[To base64 To json To Byte]
  * j 是否二进制加密
  * r[恢复处理后的文件]
  */
const filePath = process.argv.slice(2)[1];
const $1 = process.argv.slice(2)[0];
const fs = require('fs');

let common = require("./common");

var zlib = require('./zlib.min'); 
const Bagpipe = require('bagpipe');
const glob = require("glob");

var bagpipe = new Bagpipe(100);

var suffixs = [ 'js','json','html','dbbin'];
if(!$1){
    console.log("清输入参数 g[压缩混淆]，t[To base64 To json To Byte],j 【是否二进制加密】r[恢复处理后的文件]")
    return;
}
if(!filePath){
    console.log("请输入操作目录")
    return;
}
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
let arr = $1.split("");
let jsonData = {};
let datastr = "";

glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
        var types = getExn(v);
        if(suffixs.includes(types)) {
            bagpipe.push(fs.readFile,v,(err,data)=>{
                readFileContent(data,v);
            })
        } 
	})
});

function readFileContent(data,path){
    if(!data){return}
    if(!!~arr.indexOf("t")){
        //伪装js
        let b = new common.Base64();
        datastr = b.encode(data.toString());
        // datastr = datastr.replace(/[ ]/g, "");    //去掉空格
        // datastr = datastr.replace(/[\r]/g, ""); //去掉回车换行
        // datastr = datastr.replace(/[\t]/g, ""); //去掉回车换行
        // dataArr = datastr.split("\n")
        createJsonData(path);
    }else if (!!~arr.indexOf("r")){
        //还原
        restore(data,path);
    }
}
//还原 
function restore(data,path){
    let datares = common.stringToUint8Array(JSON.parse(data))
    var inflate = new zlib.Zlib.Inflate(datares);
    var plain = inflate.decompress();
    let jsonObj = JSON.parse(common.Uint8ArrayToString(plain));
    let jsonStr = ""
    for(let key in jsonObj){
        jsonStr += jsonObj[key];
    }
    console.log(new common.Base64().decode(jsonStr));

    //写出文件即可
}
let curIndex = 0;
//生成随机代码块儿 作为value
function createJsonData(path){
    let len = datastr.length;
    // for(let i = 0;i<dataArr.length;i++){
    //     dataArr[i] = dataArr[i].replace(/["]/g, "thisisbigyh"); 
    //     dataArr[i] = dataArr[i].replace(/[']/g, "thisissmallyh"); 
    // }
    console.log("当前处理代码字段还剩余："+(len-curIndex);
    if(curIndex <= len-10){
        let index = (Math.random()*10)>>0;
        let newstr = datastr.substr(curIndex,index);
        let key = common.getUUid();
        jsonData[key.toString()] = newstr;
        curIndex = curIndex + index;
        setTimeout(createJsonData, 0,path);
    }else{
        let newstr = datastr.substr(curIndex);
        let key = common.getUUid();
        jsonData[key.toString()] = newstr;
        setTimeout( endJson, 200,path);
    }
}
//处理完json数据
function endJson(path){
    curIndex = 0;
    let jsonStr = JSON.stringify(jsonData);
    let index = path.lastIndexOf("/");
    let name = path.substr(index+1).split('.')[0];
    let new_path = path.substring(0,index)+"/"+name+".json";
    if(!!~arr.indexOf("j")){
        let unit8Array = common.stringToUint8Array(jsonStr);
        var deflate = new zlib.Zlib.Deflate(unit8Array);
        var compressed = deflate.compress();
        let str = JSON.stringify(common.Uint8ArrayToString(compressed))
        // fs.writeFile(new_path,str,(err)=>{
        //     console.log("输出文件------"+new_path)
        //     if(err){console.log(err)}
        // })
        fs.writeFile(new_path,"data="+str,(err)=>{
            console.log("输出文件------"+new_path)
            if(err){console.log(err)}
        })
    }else{
        fs.writeFile(new_path,"data="+jsonStr,(err)=>{
            console.log("输出文件------"+new_path)
            if(err){console.log(err)}
        })
    }
}
