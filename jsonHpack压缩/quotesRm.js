
// 废除此脚本
const fs = require('fs');
const jsonPath = process.argv.slice(2)[0];

if(!jsonPath){
    console.error("please input path for json file");
    return 0;
}
var jsonObj = {};
fs.readFile(jsonPath,(err,data)=>{
    if(err){
        console.log(err);
    }
    jsonObj = JSON.parse(data);
    replaceQuotes(jsonObj)
    fs.writeFile(jsonPath,JSON.stringify(jsonObj),(err)=>{
        if(err){
            console.log(err);
        }
    })
})
function replaceQuotes(obj){
    if(isArray(obj)){
        for(let i = 0;i<obj.length;i++){
            if(typeof obj[i] == "string"){
                obj[i].replace(/^\"|\"$/g,'');
                obj[i].replace(/^\'|\'$/g,'')
            }
            if(isObject(obj[i]) || isArray(obj[i])){
                replaceQuotes(obj[i])
            }
        }
    }else if(isObject(obj)){
        for(let key in obj){
            key.replace(/^\"|\"$/g,'');
            key.replace(/^\'|\'$/g,'')
            if(typeof obj[key] == "string"){
                obj[key].replace(/^\"|\"$/g,'');
                obj[key].replace(/^\'|\'$/g,'')
            }
            if(isObject(obj[key]) || isArray(obj[key])){
                replaceQuotes(obj[key])
            }
        }
    }
    
}

function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object Object]';
}
 
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}