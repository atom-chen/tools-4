/**
 * 引入项目参数 
 * 项目中 目前需要有data.js ；
 * 
 */
const exec = require('child_process').exec;
const filePath = process.argv.slice(2)[0];
const fs = require('fs');



if(!filePath){
    console.log("输入资源目录");
    return;
}
function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}
let textureData = {};
let realTextureData = {};
//项目资源图集描述文件不一样 可修改为对应文件
fs.readFile(filePath+"/data.js",'utf-8',(err,datastr)=>{
    let str = datastr.toString();
    str = str.substr(str.indexOf("{"));
    let jsonData = JSON.parse(str)
    let arr = jsonData.project
    let imgsCfg = arr[3];
    typeJudge(imgsCfg);
})
function typeJudge(item,itemObj){
    if(isObject(item)){
        foreachObj(item,typeJudge)
    }else if(isArray(item)){
        if(typeof item[0] == "string" && (!!~item[0].indexOf("sheet"))){
            //当前是在帧的集合数组中
            let arr = [];
            for(let i = 0;i<itemObj.length;i++){
                let framesObj = {
                    frames:i,
                    img:itemObj[i][0],
                    x:itemObj[i][2],
                    y:itemObj[i][3],
                    w:itemObj[i][4],
                    h:itemObj[i][5]
                }
                arr.push(framesObj);
            }
            realTextureData[itemObj[0][0] + "?v="+Math.random()] = arr;
        }
        foreachArrItem(item,typeJudge)
    }else if(typeof item == "string"){
        if(!!~item.indexOf("sheet")){
            let index = item.lastIndexOf("/");
            let name = item.substr(index+1);
            if(!textureData[name]){
                textureData[name] = {frames:[]}
            }
            let framesObj = [itemObj[2],itemObj[3],itemObj[4],itemObj[5]];
            textureData[name]["frames"].push(framesObj)
        }
        
    }
}

function foreachArrItem(arr,callback){
    for(let i = 0;i<arr.length;i++){
        callback(arr[i],arr);
    }
}
function foreachObj(obj){
    for(let key in obj){
        callback(obj[key],obj);
    }
}
function readyToDraw(){
    setTimeout(() => {
        exec(`python drawRect.py`,(err,stdout,stderr)=>{
            if(err){
                console.log(err)
            }
        })
    }, 1000);
}
function getLiStr(src,config){
    let str = ""
    for (let i = 0;i<config.length;i++){
        str += JSON.stringify(config[i])+"<br/>"
    }
    let liStr = `<li>
                    <img src="${src}" class="img">
                    <a href="${src}" style="color: #fff">${src}</a>
                    <div style="display: none">
                        <span>
                            ${str}
                        </span>
                    </div>
                </li>`
    return liStr
}
function getHtmlModule(data){
    let lisStr = ""
    for(let key in data){
        lisStr += getLiStr(key,data[key])
    }
    return `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <title>Frames show</title>
                    <link rel="manifest" href="manifest.json" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
                    <style type="text/css">
                        * {
                            padding: 0;
                            margin: 0;
                        }
                        html, body {
                            background: #000;
                            color: #fff;
                            overflow: hidden;
                            touch-action: none;
                            -ms-touch-action: none;
                        }
                        .imgList{
                            overflow-x: hidden;
                            overflow-y: scroll;
                        }
                        img{
                            width: 100px;
                            height:100	px;
                        }
                    </style>
                    
                
                </head> 
                <body> 
                    <ul id="imgList">
                        ${lisStr}
                    </ul>
                    <script>
                        let imgs = document.getElementsByClassName("img")
                        for(let i = 0;i<imgs.length;i++){
                            imgs[i].addEventListener('click',()=>{
                                let div = imgs[i].parentElement.getElementsByTagName('div')[0];
                                let display = div.style.display;
                                if(display == "none"){
                                    div.style.display="block";
                                }else{
                                    div.style.display="none";
                                }
                            })
                        }
                    </script>
                </body> 
            </html> `

}
setTimeout(() => {
   let htmlStr = getHtmlModule(realTextureData);
   fs.writeFile('frames.htm',htmlStr,(err)=>{
       if(err){
           console.log(err);
           return;
       }
       console.log("-----------------输出页面----------")
   })
   fs.writeFile('frames.json',JSON.stringify(realTextureData),(err)=>{
       if(err){
           console.log(err);
           return;
       }
       console.log("-------------------输出真实图集成功--------------")
   })
//    fs.writeFile("textures.json",JSON.stringify(textureData),(err)=>{
//        if(err){
//            console.log(err);
//            return;
//        }
//        console.log("------------------输出纹理对应配置文件成功----------------------");
//        console.log("------------------开启解析绘制数据-------------------");
//     //    readyToDraw()
//    })
}, 1000);



