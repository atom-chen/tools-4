
const fs = require('fs');
const glob = require("glob");
const filePath = process.argv.slice(2)[0];
const params = process.argv.slice(2)[1];

let suffix = ["_png","_jpg","_json","_mp3","_zip"];

if(!filePath){
    console.warn('没有选择资源文件路径');
    return;
}

function getExn(dir) {
	if(!dir) {return null;}
    let boo = 0;
    for(let i = 0;i<suffix.length;i++){
        if(dir.indexOf(suffix[i])!=-1){
            boo = 1;
            break;
        }
    }
    return boo;
}
let files = [];
let allFiles = [];
fs.readFile('config.json',(err,data)=>{
    if(err){console.log(err)}
    let jsonObj = JSON.parse(data);
    
    for(let key in jsonObj){
        let item = jsonObj[key];
        let items = item.split(",");
        let str = ""
        items.forEach(element => {
            let boo = getExn(element);
            if(boo == null){
                console.error("出现未在集合中的后缀值文件:"+element);
                return;
            }
            allFiles.push(element);
            if(boo) {
                let index = element.lastIndexOf("_");
                let headStr = element.substring(0,index);
                let endStr = element.substring(index+1);
                str = headStr + "." + endStr;
			} else{
                str = element;
            }
            files.push(str);
        });
    }
    calculTotalSize();
})
function isExit(fileName){
    for(let i = 0;i<files.length;i++){
        if(fileName.indexOf(files[i]) != -1){
            for(let j = 0;j<realFiles.length;j++){
                if(realFiles[j].indexOf(files[i]) != -1){
                    //遇到相同 已存在
                    return false;
                }
            }
            return true;
        }
    }
    return false
}
let size = 0;
let realFiles = [];
function calculTotalSize(){
    glob(filePath + "/**/*.*", function(er, files) {
        files.forEach(v=>{
            if(isExit(v)){
                realFiles.push(v);
            }
        })
        getSize(realFiles.shift())
    });
    
}
let jsonobj = {};
function getSize(v){
    fs.stat(v,function(error,stats){
        if(error){
            console.error("file size error");
            return
        }else{
            //文件大小
            let kb = stats.size/1024;
            size += kb;
            let index = v.lastIndexOf("/");
            let endstr = v.substring(index+1);
            if(!params){
                let dotIndex = endstr.lastIndexOf(".");
                let name = endstr.substring(0,dotIndex);
                jsonobj[name] = kb
            }else{
                jsonobj[endstr] = kb;
            }
            if(realFiles.length > 0){
                getSize(realFiles.shift());
            }else{
                console.log("当前加载资源总大小："+size);
                  
                fs.writeFile("size.json",JSON.stringify(jsonobj),(err)=>{
                    if(err){console.log(err)}
                })
            }
        }
    })
}