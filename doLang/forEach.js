const fs = require('fs');
const path = require('path');

const filePath = process.argv.slice(2)[0]||path.resolve('./dist');
const http = require("http");

//fileDisplay(filePath);

function fileDisplay(filePath){
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            files.forEach(function(filename){
                
                var filedir = path.join(filePath, filename);
                
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isDir = stats.isDirectory();
                        if(isDir){
                            fileDisplay(filedir);
                        }else{
                            console.log(filedir);
							//var content = fs.readFileSync(filedir, 'utf-8');
                        }
                    }
                })
            });
        }
    });
}