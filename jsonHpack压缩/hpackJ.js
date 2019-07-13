var exec = require('child_process').exec;
const jsonPath = process.argv.slice(2)[0];
const $1 = process.argv.slice(2)[1];
const fs = require('fs');
var zlib = require('zlib'); 

if(!jsonPath){
    console.error("please input path for json file");
    return 0;
}
if(!$1){
    console.error("please input oper: param 1 to hpack,param 2 to restore");
    return;
}

function hpack(){
    exec(`node json-ys ${jsonPath}`);
    fs.readFile(jsonPath,(err,data)=>{
        if(err){
            console.log(err);
        }
        jsonObj = JSON.parse(data);
        let jsonStr = JSON.stringify(jsonObj);
        let buffer = Buffer.from(jsonStr);
        zlib.deflate(buffer,(err,result)=>{
            if(err){console.log(err)}else{
                fs.writeFile(jsonPath,result,(err)=>{
                    if(err){console.log(err)}
                })
            }
        })
    })
}
function restore(data){
    fs.readFile(jsonPath,(err,data)=>{
        if(err){
            console.log(err);
        }
        let buffer = Buffer.from(data);
        zlib.inflate(data,(err,result)=>{
            fs.writeFile(jsonPath,JSON.stringify(JSON.parse(result)),(err)=>{
                if(err){console.log(err)}
            })
        })
    })
}
$1 == 1?hpack():restore();






