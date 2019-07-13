 /**
  * params
  * g[压缩混淆]
  * t[To base64 To json To Byte]
  * j 是否二进制加密
  * r[恢复处理后的文件]
  */
var exec = require('child_process').exec;
const filePath = process.argv.slice(2)[1];
const $1 = process.argv.slice(2)[0];
const fs = require('fs');
var zlib = require('./zlib.min'); 
const Bagpipe = require('bagpipe');
const glob = require("glob");
var UUID = require('uuid');

var bagpipe = new Bagpipe(100);

var Exname = [ 'js','json','html','dbbin'];
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

function Base64() {
 
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
 
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
 
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
        return utftext;
    }
 
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
        var types = getExn(v);
        if(Exname.includes(types)) {
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
        let b = new Base64();
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
//还原 暂时未修改
function restore(data,path){
    var inflate = new zlib.Zlib.Inflate(data);
    var plain = inflate.decompress();
    // let jsonObj = JSON.parse(Uint8ArrayToString(plain));
    // console.log(jsonObj)
    // let blockStr = ""
    // for(let key in jsonObj){
    //     blockStr += jsonObj[key]
    // }
    // let b = new Base64();
    // let str = b.decode(blockStr);
    // let index = path.lastIndexOf("/");
    // let name = path.substr(index+1).split('.')[0];
    // let new_path = path.substring(0,index)+"/"+name+".js";
    // fs.writeFile(new_path,str,(err)=>{
    //     if(err){console.log(err)}
    // })
}
//生成随机key值
function createRandomKey(){
    return UUID.v1()
}
let curIndex = 0;
//生成随机代码块儿 作为value
function createJsonData(path){
    let len = datastr.length;
    // for(let i = 0;i<dataArr.length;i++){
    //     dataArr[i] = dataArr[i].replace(/["]/g, "thisisbigyh"); 
    //     dataArr[i] = dataArr[i].replace(/[']/g, "thisissmallyh"); 
    // }
    console.log("当前处理代码字段还剩余："+(len-curIndex));
    if(curIndex <= len-10){
        let index = (Math.random()*10)>>0;
        let newstr = datastr.substr(curIndex,index);
        let key = createRandomKey();
        jsonData[key.toString()] = newstr;
        curIndex = curIndex + index;
        setTimeout(createJsonData, 0,path);
    }else{
        let newstr = datastr.substr(curIndex);
        let key = createRandomKey();
        jsonData[key.toString()] = newstr;
        setTimeout( endJson, 200,path);
    }
}
function stringToUint8Array(str){
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
      arr.push(str.charCodeAt(i));
    }
   
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}
function Uint8ArrayToString(fileData){
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
      dataString += String.fromCharCode(fileData[i]);
    }
   
    return dataString
  
}
//处理完json数据
function endJson(path){
    curIndex = 0;
    let jsonStr = JSON.stringify(jsonData);
    let index = path.lastIndexOf("/");
    let name = path.substr(index+1).split('.')[0];
    let new_path = path.substring(0,index)+"/"+name+".json";
    if(!!~arr.indexOf("j")){
        let unit8Array = stringToUint8Array(jsonStr);
        var deflate = new zlib.Zlib.Deflate(unit8Array);
        var compressed = deflate.compress();
        let str = JSON.stringify(Uint8ArrayToString(compressed))
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
    
    
    // zlib.deflate(buffer,(err,result)=>{
    //     if(err){console.log(err)}else{
    //         
    //         
    //     }
    // })
}
