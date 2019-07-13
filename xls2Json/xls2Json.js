const xlsx2json =  require("node-xlsx");
const glob = require("glob");
const fs = require('fs');

const otherNameRule = {
    "partStrengthen":"id_level",
    "beautyLevel":"beautyId_level",
    "beautyLikeAbility":"id_level",
    "beautyZSLevel":"beautyId_level",
    "partJewel":"id_level",
    // "dayRecharge":"day_index",
    "partRiseStar":"id_star",
    "buynum":"add"
}
const filePath = process.argv.slice(2)[0];

if(!filePath){
	console.warn('没有选择路径')
}
const dataIndex = 5;
// const stringType = ["item","varchar","text","attr","coin","drop","pos","attrs","shopDrop","int[]","<int[]>"];  
// const numberTyoe = ["int","bigint"];
let config_json = {};
const Exname = [ 'xls'];
let totalFileNum = 0;
let curIndex = 0;

// 判断是否在特殊命名规则
function judageIsInRule(xlsName){
    for(let key in otherNameRule){
        if(key == xlsName){
            return otherNameRule[xlsName];
        }
    }
    return ""
}
// 标准json格式
function StandedJson(){
    this.jsonCfg = {
        name:"",
        keyArr:[],
        valueArr:[]
    }
}
// 生成特殊规则的key值
function createSpecialRuleKey(keyCfg,valueArr,ruleStr){
    let arr = ruleStr.split("_");
    let key = "";
    arr.forEach((value,i)=>{
        let curIndex = keyCfg.indexOf(value);
        let itemValue = valueArr[curIndex];
        i==0?(key = itemValue):key = key+"_"+itemValue;
    })
    return key;
}
// 创建当个jsonitem对象
function createItemJson(standedJson){
    config_json[standedJson.name] = {};
    //判断当前表有没有特别的命名规则
    let ruleStr = judageIsInRule(standedJson.name);
    if(ruleStr == "add"){
        config_json[standedJson.name] = [];
    }
    let valueCfg = standedJson.valueArr;
    let keyCfg = standedJson.keyArr;
    let valueLen = valueCfg.length;
    // 遍历整个数据集合
    for(let i = 0;i<valueLen;i++){
        if(valueCfg[i] == "null"){continue;}
        //遍历单条数据
        let idValue = 0;
        
        if(ruleStr != ""){
            idValue = createSpecialRuleKey(keyCfg,valueCfg[i],ruleStr)
            config_json[standedJson.name][idValue] = {};
        }else if(ruleStr == "[]"){

        }else
        {
            config_json[standedJson.name][valueCfg[i][idValue]] = {};
        }
        let obj = {};
        for(let j = 0;j<valueCfg[i].length;j++){
            if(valueCfg[i][j] != "null"){
                let curKey = keyCfg[j];
                let curValue = valueCfg[i][j];
                if(ruleStr != ""){
                    if(ruleStr == "add"){
                        obj[curKey] = curValue;
                        config_json[standedJson.name].push(obj);
                    }else{
                        config_json[standedJson.name][idValue][curKey] = curValue;
                    }
                }else{
                    config_json[standedJson.name][valueCfg[i][idValue]][curKey] = curValue;
                }
            }
        }
    }
    console.log("当前处理文件为："+standedJson.name+".xls 当前总进度------->"+curIndex+"/"+totalFileNum)
    if(curIndex >= totalFileNum){
        console.log("当前已经处理完成文件夹下所有xls ---> To ----> json合集文件的转换")
        fs.writeFile(filePath+"/config.json",JSON.stringify(config_json),(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("写入文件成功--output:config.json")
            }
        })
    }
}
// 填补空的数据
function checkData(itemData){
    for(let i = 0;i<itemData.length;i++){
        if(!itemData[i] && itemData[i]!=0){
            itemData[i] = "null"
        }
    }
}
// 处理单个加载完成的xls文件
function dealSingleXls(path,oper){
    let index = path.lastIndexOf("/")+1
    let nameStr = path.slice(index).split(".")[0];
    let list = xlsx2json.parse(path);
    console.log(path)
    let dataArr = list[0].data;
    if(!!oper){totalFileNum += 1;return}
    let standedJson = new StandedJson();
    standedJson.name = nameStr;
    standedJson.keyArr = dataArr[1];
    let valueArr = [];
    for(let j = dataIndex;j<dataArr.length;j++){
        checkData(dataArr[j]);
        if(!dataArr[j].length){
            valueArr.push("null")
        }else{
            valueArr.push(dataArr[j])
        }
    }
    standedJson.valueArr = valueArr;
    createItemJson(standedJson);
}
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
function otherOper(files,oper){
    files.forEach(function(v, i) {
        var types = getExn(v);
        if(Exname.includes(types)) {
            oper?(totalFileNum+=1):(curIndex+=1,dealSingleXls(v));
        } 
	})
}
glob(filePath + "/**/*.*", function(er, files) {
    otherOper(files,1)
    otherOper(files,0)
});

