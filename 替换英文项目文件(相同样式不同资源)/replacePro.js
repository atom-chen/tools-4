// 需要2个参数  1:目标目录  2 拷贝目录  都为项目目录
const fs = require('fs');
const filePathEn = process.argv.slice(2)[0];
const filePathCn = process.argv.slice(2)[1];
const oper = process.argv.slice(2)[2];
const glob = require("glob");
const zip = new require('node-zip')()
var exec = require('child_process').exec;


//对应文本替换配置
let zzcqexmlRCfg = ["CreateRoleView.ts","CreateRoleSkin.exml","LoginView.ts",
"LoginSkin.exml","RoleWin.ts","RoleWinSkin.exml","RoleSelectPanel.ts","RoleSelectPanelSkin.exml",
"RoleInfoPanel.ts","RoleInfoSkin.exml","UIView2.ts","UIView2Skin.exml","PlayFunView.ts","PlayFunSkin.exml",
"CityFunPanel.ts","CityFunSkin.exml","config.json"];

let zgmrRcfg = [
    "ServerListSelectModule.ts","ServerListViewSkin.exml","CreateRoleModule.ts","CreateRoleSkin.exml",
    "WelcomeModule.ts","WelcomeSkin.exml","GuideModule.ts","GuideViewSkin.exml","MainModule.ts","MainViewSkin.exml",
    "MainTopModule.ts","MainTopSkin.exml","EquipModule.ts","EquipSkin.exml","EquipCom.ts","EquipComSkin.exml","MainRoleItemSkin.exml",
    "MainRoleItem.ts","MainTopOreItemSkin.exml","MainTopOreItem.ts","MainFieldBossInfo.exml","MainFieldBossCountDown.ts",
    "MainBossItemSkin.exml","MainBossItem.ts","MainMapInfoItem.ts","MainMapInfoItemSkin.exml","UIEffectSkin.ts","UIEffectSkin.exml",
    "MainFuncShow.ts","MainFuncShowSkin.exml"
]

let zzcqConfigCngR = ["PlayFunConfig"]

// 对应assets资源替换
// let assetsR =  {

// }

if(!filePathEn){
	console.error('没有选择英文项目路径')
}
if(!filePathCn){
    console.error("没有选择中文项目路径")
}
if(!oper){
    console.error("请输入项目缩写")
}else if(oper != "zzcq" && oper !="zgmr"){
    console.error("类型不对")
}
function isOperFile(v){
    if(!v) {return false;}
    let arr = v.split("/");
    return arr[arr.length - 1];
}
let tragetDir = []
glob(filePathEn + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
        if(v.indexOf("bin-release") == -1){
            var types = isOperFile(v);
            let option = oper=="zzcq"?zzcqexmlRCfg:zgmrRcfg;
            if(option["includes"](types)) {
                tragetDir.push(v);
            } 
        }
        if(i>= files.length - 1){
            console.log(tragetDir)
            replaceItem();
        }
        
	})
});

function replaceItem(){
    let path = tragetDir.shift()
    let arr = path.split("/");
    let index = arr.indexOf("resource");
    if(index == -1){
        index = arr.indexOf("src");
    }
    let new_arr = arr.slice(index,arr.length)
    let path2 = filePathCn + "/" + new_arr.join("/");
    let suffix = arr[arr.length - 1];
    if(oper == "zgmr"){
        if(tragetDir.length > 0){exec("mv -f "+path2+" "+path ),console.log("移动目录---->"+path2+"----to---->"+path),replaceItem()}
        return;
    }
    if(suffix != "config.json"){
        if(tragetDir.length > 0){exec("mv -f "+path2+" "+path ),console.log("移动目录---->"+path2+"----to---->"+path),replaceItem()}
    }else{
        //处理json数据
        fs.readFile(path, (err,data)=>{
            if(err){console.error(err)};
            let jsonObj =  JSON.parse(data);
            fs.readFile(path2,(err,data2)=>{
                let jsonObj2 = JSON.parse(data2);
                zzcqConfigCngR.forEach(str=>{
                    jsonObj[str] = jsonObj2[str];
                })
                fs.writeFile(path,JSON.stringify(jsonObj),(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("写入文件成功--output:config.json")
                        if(tragetDir.length > 0){replaceItem()}else{(console.log("END..."))}
                    }
                })
            })
        })
    }
}