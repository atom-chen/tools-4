
var exec = require('child_process').exec;

const fs = require('fs');

// http://cdnh5.nibaguai.com/gong2/resource/old/20190704v1/resource.json

// http://cdnh5.nibaguai.com/gong2/resource/old/base190704/resource.json

//资源json URL 路径
const urlparam = process.argv.slice(2)[0]; 
//此参数为r 默认不传的话 不会覆盖url.txt中数据    
const operparam = process.argv.slice(2)[1]; 


let suffix = ['.jpg','.png','.json']

let url = "";
if(urlparam){
    //将resource中资源解析成 curl格式  为了方便下载资源数据
    let curPath = __dirname
    let relaticUrl = urlparam.replace(curPath,"curl http:/")
    url = relaticUrl.substring(0,relaticUrl.lastIndexOf("/"))+"/";
    fs.readFile(urlparam,(err,data)=>{
        if(err){console.log(err);return}
        let jsonData = JSON.parse(data);
        let resource = jsonData.resources;
        let str = ""
        if(resource && resource.length){
            resource.forEach(itemObj=>{
                if(itemObj.type && itemObj.type == "sheet"){
                    itemObj.url = itemObj.url.substring(0,itemObj.url.lastIndexOf("."))+".png";
                }
                str += url +itemObj.url+ " -H;\n";
            })
        }
        let wurl = curPath + "/url.txt";
        if(operparam && operparam == "r"){
            fs.writeFile(wurl,str,(err)=>{
                if(err){console.log(err);return}
            })
        }else{
            fs.appendFile(wurl,str,(err)=>{  
                if(err){console.log(err);}  
            });
        }
    })
    return;
}
function includeSuffix(url){
    for(let i = 0;i<suffix.length;i++){
        if(!!~url.indexOf(suffix[i])){
            return 1;
        }
    }
    return 0;
}
let singleTotalPath = ""
function createDir(pathArr,callBackFunc,url){
    let path = pathArr.shift();
    if(!!~path.indexOf("http") || path == ""){
        if(pathArr.length){
            createDir(pathArr,callBackFunc,url)
        }else{
            callBackFunc(singleTotalPath,url);
            singleTotalPath = "";
        }
        return;
    }
    singleTotalPath += path
    fs.exists(singleTotalPath, function(exists) {
        if(!exists){
            exec(`mkdir -p ${singleTotalPath}`);
        }
        singleTotalPath +="/"
        if(pathArr.length){
            createDir(pathArr,callBackFunc,url)
        }else{
            callBackFunc(singleTotalPath,url);
            singleTotalPath = "";
        }
    });
    
}
let newurlArr = [];
fs.readFile('url.txt',(err,data)=>{
    let str = data.toString();
    let urlArr = str.split(";");
    let arr = [];
    urlArr.forEach(elem=>{
        let index1 = elem.indexOf("curl");
        let index2 = elem.indexOf("-H");
        let newstr = elem.substring(index1+4,index2);
        if(!!~newstr.indexOf('http') && includeSuffix(newstr)){
            let index = newstr.indexOf("?");
            if(index != -1){
                newstr = newstr.substring(0,index);
            }
            newurlArr.push(newstr);
        }
    })
    wgetUrl(newurlArr.shift());

})
function wgetUrl(url){
    let pathArr = url.split("/");
    pathArr.pop();
    createDir(pathArr,request,url);
}
function request(path,url){
    url = url.replace(/[\']/g, ""); //去掉回车换行
    console.log('当前下载资源---->>>>>>>>>'+url)
    exec(`wget -P ${path} ${url}`,(err,stdout,stderr)=>{
        if(err){
            console.log(err);
            return;
        }
        if(newurlArr.length){
            wgetUrl(newurlArr.shift());
        }
    });
}




