const fs = require('fs');
const filePath = process.argv.slice(2)[0];
const projectstr = process.argv.slice(2)[1];
var exec = require('child_process').exec;


// 
// {
//     MC:{
//         ACTION:{

//         }
//     },
//     CUSTOM[index]:{

//     }
//     .....,
//     RES:{

//     }
// }
let KeyCfg = {
    // 自定义标签 字符串数组集合 会生成该标签  但是生成动画文件以后  需要手动修改对应的自定义标签的内容
    CUSTOM:["hit","die"]
}

function MovieClipJsonCfg(){
    this.frameRate = 15;
    this.frames = [];
    this.cfg = {"mc":{}}
    this.cfgname = function(name){
        this.cfg["mc"][name] = {};
    };
}
function ResCfg(){
    this.cfg ={"x":0,"y":0,"w":0,"h":0}
}
if(!filePath){
    console.warn('没有选择路径')
    return;
}
// 输出mcData文件
function output(path,data){
    fs.writeFile(path,JSON.stringify(data),(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("输出文件成功--output:"+path)
        }
    })
}
if(projectstr && projectstr == "dts"){
    let keyObj = {};
    //当前是大天使的处理方式
    //role ->boos_attack
    //         --->attack_0
    //         --->attack_1
    //         ...
    //     ->stand
    //     ->run 
    let jsonCfgs = [];
    let actionKeys;
    function getAllDIR(){
        //当前动作key值
        actionKeys  = fs.readdirSync(filePath);
        
        //boos_attack stand run
        actionKeys.forEach(function(action){
            let stat = fs.lstatSync(filePath+"/" + action)
            
            if(stat.isDirectory() === true){
                if(action != "Placements"){
                   keyObj[action] = {};
                }
                //获取到文件夹下所有的图片 并移动到当前目录新创建的config文件夹 并记录对应的键值
                //attack_0 attack_1 ...
                exec(`rm -rf ${filePath}/${action}/${action}&&mkdir ${filePath}/${action}/${action}/`,(err,stdout,stderr)=>{
                    const actionIndexs = fs.readdirSync(filePath+"/" + action)
                    actionIndexs.forEach(function(item){
                        if(item != "Placements" && item != `${action}`){
                            let stat = fs.lstatSync(filePath+"/" + action+"/"+item)
                            if(stat.isDirectory() === true){
                                let imgs = fs.readdirSync(filePath+"/" + action+"/"+item);
                                keyObj[action][item] = imgs;
                                for(let i = 0;i<imgs.length;i++){
                                    let path1 = filePath+"/" + action+"/"+item+"/"+imgs[i];
                                    exec(`cp ${path1} ${filePath}/${action}/${action}/`,(err,stdout,stderr)=>{
                                        if(err){console.log(err);return};
                                    })
                                }
                            }
                        }
                    })
                });
            }
        })
    }
    getAllDIR();
    setTimeout(() => {
        let keys = Object.keys(keyObj);
        console.log(keys)
        execCommond(keys);
    }, 1000);
    function execCommond(keys){
        let str = keys.shift();
        let fp = filePath+"/"+str+"/"+str;
        let position = filePath+"/"+str+"/"+str+".json"
        jsonCfgs.push(position)
        console.log("------------------生成合图-------------")
        exec(`/Applications/TextureMerger.app/Contents/MacOS/TextureMerger -p `+fp+` -o ` +position,(err,stdout,stderr)=>{
            if(err){
                console.error(err);
            }else{
                if(!!keys.length){execCommond(keys)}else{
                    console.log("图集生成完成---开始处理json数据--生成mcdata")
                    modifyJsonDTS();
                }
            }
        })
    }
    
    function modifyJsonDTS(callback){
        let jsonPath = jsonCfgs.shift();
        console.log("--------解析---------"+jsonPath)
        fs.readFile(jsonPath,(err,data)=>{
            if(err){
                console.log(err);
            }
            let suffix = jsonPath.slice(jsonPath.lastIndexOf("/")+1).split(".")[0];
            let jsonObj = JSON.parse(data);
            let frames = jsonObj["frames"];
            let singleKey  = keyObj[suffix];
            let mcCfg = new MovieClipJsonCfg();
            let resCfgs = {};
            let frameKeys = [];
            for(let key in frames){
                let resCfg = new ResCfg();
                resCfg = createItemResCfg(resCfg,frames[key]);
                resCfgs[key] = resCfg.cfg;
                mcCfg.cfg["res"] = resCfgs;
                frameKeys.push(key);
            }
            for(let key2 in singleKey){
                mcCfg.frameRate = 12;
                let name = key2;
                mcCfg.cfgname(name);
            }
            dealSingleFrame(frameKeys,mcCfg,singleKey,jsonPath)
        })
    }
    function dealSingleFrame(frameKeys,mcCfg,singleKey,jsonPath){
        let frameKey = frameKeys.shift();
        let url = filePath + "/Placements/"+frameKey+".txt";
        let name = "";
        for(let key2 in singleKey){
            let arr = singleKey[key2]
            if(!!~arr.indexOf(frameKey+".png")){
                name = key2
            }
        }
        fs.readFile(url,(err,txtdata)=>{
            let str = txtdata.toString();
            str = str.replace(/[ ]/g, "");    //去掉空格
            str = str.replace(/[\r]/g, ""); //去掉回车换行
            arr = str.split("\n")
            let obj = {"res":frameKey,"x":arr[0],"y":arr[1]};
            if(!mcCfg.cfg["mc"][name]["frames"]){
                mcCfg.cfg["mc"][name]["frames"] = [];
            }
            mcCfg.cfg["mc"][name]["frames"].push(obj);
            mcCfg.cfg["mc"][name]["frameRate"] = mcCfg.frameRate;
            mcCfg.cfg["mc"][name]["frames"].sort(keysort("res",false));
            if(frameKeys.length){
                dealSingleFrame(frameKeys,mcCfg,singleKey,jsonPath)
            }else{
                output(jsonPath,mcCfg.cfg);
                if(!!jsonCfgs.length){
                    console.log("json处理完毕-------输出mcdata json文件")
                    modifyJsonDTS();
                }
            }
            // console.log(keyarr.length)
            // if(keyarr.length){
            //     func(keyarr.shift(),namearr.shift())
            // }else{
            //     output(jsonPath,mcCfg.cfg);
            //     if(!!jsonCfgs.length){
            //         console.log("json处理完毕-------输出mcdata json文件")
            //         modifyJsonDTS();
            //     }
            //     return;
            // }
        })
    }
 
}else{
    exec("cd "+filePath);
    exec(`rm -rf ${filePath}/config&&mkdir config`);
    let components = [];
    let jsonCfgGather = [];


    //不存在默认正常方式处理
    function getAllDIR(){
        const files = fs.readdirSync(filePath)
        files.forEach(function (item, index) {
            if(item != "Placements" && item != "config"){
                let stat = fs.lstatSync(filePath+"/" + item)
                if (stat.isDirectory() === true) { 
                    components.push(filePath+"/" + item);
                }
            }
            
        })
    }
    getAllDIR();

    function execCommond(){
        let paramStr = components.shift();
        let arr = paramStr.split("/");
        let name = arr[arr.length-1];
        commond(paramStr,name)
    }
    execCommond()

    function commond(param1,name){
        let param2 = filePath + "/config/"+(name+".json")
        jsonCfgGather.push(param2)
        console.log("---------------生成合图----------"+param2)
        exec(`/Applications/TextureMerger.app/Contents/MacOS/TextureMerger -p `+param1+` -o ` +param2,(err,stdout)=>{
            if(err){
                console.error(err);
            }else{
                if(!!components.length){execCommond()}else(modifyJson())
            }
        })
    }
}


// 创建单个resitem
function createItemResCfg(resCfg,value){
    for(let key in resCfg.cfg){
        resCfg.cfg[key] = value[key]
    }
    return resCfg;
}

/**
 * 对数组中的对象，按对象的key进行sortType排序
 * key 数组中的对象为object,按object中的key进行排序
 * sortType true为降序；false为升序
 */
function keysort(key,sortType){
    return function(a,b){
        return sortType ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
}
// 修改生成的json文件  格式化为mc文件
function modifyJson(){
    let jsonPath = jsonCfgGather.shift();
    console.log("--------解析---------"+jsonPath)
    fs.readFile(jsonPath,(err,data)=>{
        if(err){
            console.log(err);
        }
        let jsonObj = JSON.parse(data);
        let frames = jsonObj["frames"];
        let mcCfg = new MovieClipJsonCfg();
        let name = jsonObj["file"].split(".")[0];
        mcCfg.cfgname(name);
        let resCfgs = {};
        let index = 0;
        let len = Object.keys(frames).length;
        for(let key in frames){
            let url = filePath + "/Placements/"+key+".txt";
            fs.readFile(url,(err,txtdata)=>{
                let resCfg = new ResCfg();
                let str = txtdata.toString();
                str = str.replace(/[ ]/g, "");    //去掉空格
                str = str.replace(/[\r]/g, ""); //去掉回车换行
                arr = str.split("\n")
                resCfg = createItemResCfg(resCfg,frames[key]);
                resCfgs[key] = resCfg.cfg;
                let obj = {"res":key,"x":arr[0],"y":arr[1]};
                mcCfg.frames.push(obj);
                if(index >= len-1){
                    mcCfg.frames.sort(keysort("res",false))
                    mcCfg.cfg["mc"][name] = {
                        "frameRate":mcCfg.frameRate,
                        "frames":mcCfg.frames
                    }
                    mcCfg.cfg["res"] = resCfgs;
                    output(jsonPath,mcCfg.cfg);
                    if(!!jsonCfgGather.length){
                        modifyJson();
                    }
                }
                index += 1;
            })
        }
        for(let i = 0;i<KeyCfg.CUSTOM.length;i++){
            let obj = {"frameRate":1,"frames":[]};
            mcCfg.cfg[KeyCfg.CUSTOM[i]] = obj;
        }
    })
}



