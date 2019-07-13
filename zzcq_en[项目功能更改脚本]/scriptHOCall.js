/**
 * 参数
 * -r 更换人物显示
 * -g 更换怪物显示
 * -m 更换地图块
 * 
 * use:  npm run do rgm ../../project path
 */
const fs = require('fs');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
const params = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];
const glob = require("glob");

if(!params){console.log("输入操作参数");return}
if(!filePath){console.log("输入目标项目目录");return}

let pg = params.split("");
let roleCfg = new RoleCfg();
let monsterCfg = new MonsterCfg();
let mapCfg = new MapCfg();

fs.readFile("config.json",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let configObj = JSON.parse(data);
    if(pg.includes["r"]){
        roleCfg = configObj["r"];
        copyIt(__dirname+"/role/",filePath+"/"+roleCfg.path);
    }
    if(pg.includes["g"]){
        monsterCfg = configObj["g"];
        copyIt(__dirname+"/monster/",filePath+"/"+monsterCfg.path);
    }
    if(pg.includes["m"]){
        mapCfg = configObj["m"];
        //先执行切图
        exec(`python zhizunchuanqisplit.py ${filePath}`);
    }
})
/**执行人物的相关处理 */
function dealRole(files){

}
function copyIt(from, to) {

    spawn('cp', ['-rf', from, to]);    
}
/**执行怪物的相关处理 */
function dealMon(files){
    
}
/**执行地图的相关处理 */
function dealMap(files){
    
}
/**获取当前目录所有文件 */
function getAllFile(path,callBack){
    glob(path + "/**/*.*", function(er, files) {
        callBack(files)
    });
}

function RoleCfg(){
    this.rule = 0;
    this.ids ={};
    this.ruleValue = 0;
    this.fileNames = [];
    this.path="";    
}
function MonsterCfg(){
    this.levelMonId = [];
    this.path = [];
    this.fileNames = [];
}
function MapCfg(){
    this.block = {};
    this.path = "";
}



