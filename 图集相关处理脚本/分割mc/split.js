const fs = require('fs');
const filePath = process.argv.slice(2)[0];
const param1 = process.argv.slice(2)[1];
const param2 = process.argv.slice(2)[2];
var exec = require('child_process').exec;
const glob = require("glob");
const Bagpipe = require('bagpipe');

var Exname = [ "json"];
var bagpipe = new Bagpipe(100);

if(param1){
    console.log(param1);
}
if(param2){
    console.log(param2)
}
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
let totalNum = 0;
let curindex = 0;
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
        if(Exname.includes(types)) {
            totalNum += 1;
        } 
	})
});
//获取所有文件
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
        if(Exname.includes(types)) {
            bagpipe.push(fs.readFile,v,'utf-8',(err,data)=>{
                readFileContent(data,v);
            })
        } 
	})
});
let new_pathGather = [];
function readFileContent(data,path) {
    let jsonObj = JSON.parse(data);

    let res = jsonObj["res"];
    let arr = path.split("/");
    let nameStr = arr[arr.length - 1];
    let new_name = nameStr.split(".")[0]+".png";
    let newJsonObj = {"file":new_name,"frames":{}};
    for(let key in res){
        newJsonObj["frames"][key] = res[key]
        if(param1){
            newJsonObj["frames"][key]["sourceW"] = param1
        }else{
            newJsonObj["frames"][key]["sourceW"] = res[key]["w"];
        }
        if(param2){
            newJsonObj["frames"][key]["sourceH"] = param2;
        }else{
            newJsonObj["frames"][key]["sourceH"] = res[key]["h"];
        }
        
        newJsonObj["frames"][key]["offX"] = 0;
        newJsonObj["frames"][key]["offY"] = 0;
    }
    // let new_path = path.substring(0,path.lastIndexOf("/"));
    new_pathGather.push(path);
    fs.writeFile(path,JSON.stringify(newJsonObj),(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("输出文件成功--output:"+path)
            if(new_pathGather.length >= totalNum){
                console.log("开始执行分解")
                execCmd();
            }
        }
    })
}
function execCmd(){
    if(new_pathGather.length > 0){
        let path = new_pathGather.shift();
        exec(`python splitMc.py ${path}`,(err,stdout)=>{
            if(err){
                console.error(err);
            }else{
                execCmd()
            }
        })
    }else{
        console.log("end...")
    }
}