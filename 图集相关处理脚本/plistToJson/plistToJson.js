const fs = require('fs');
const glob = require('glob');
const parseXml = require('xml2js').parseString
let Bagpipe = require('bagpipe')

const filePath = process.argv.slice(2)[0];

var bagpipe = new Bagpipe(100);

if(!filePath){
    console.log("请输入路径");
    return;
}
var Exname = [ 'xml',"plist"];
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
//获取所有文件
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
			if(Exname.includes(types)) {
				bagpipe.push(fs.readFile,v,'utf-8',(err,data)=>{
					readFileContent(data,v);
				})
			} 
	})
});
function readFileContent(data,path) {
    parseXml(data,(err,result)=>{
        if(err){throw err;return}
        let firststr = path.substring(0,path.lastIndexOf("."));
        let firstKey = firststr.substring(firststr.lastIndexOf("/")+1);
        let keys = result["plist"]["dict"][0]["dict"][0]["key"];
        let values = result["plist"]["dict"][0]["dict"][0]["dict"]
        let mcCfg = {mc:{},res:{}}
        let arr = [];
        for(let i = 0;i<keys.length;i++){
            let newName = keys[i].replace(".","_");
            let curValueObj = values[i];
            let curValueKey = curValueObj["key"];
            let curValue = curValueObj["string"];
            let x = curValue[0].substring(2,curValue[0].indexOf(","));
            let y = curValue[0].substring(curValue[0].indexOf(",")+1,curValue[0].indexOf("}"));
            let w = curValue[0].substring(curValue[0].lastIndexOf("{")+1,curValue[0].lastIndexOf(","));
            let h = curValue[0].substring(curValue[0].lastIndexOf(",")+1,curValue[0].lastIndexOf("}")-1);
            let offestX = curValue[1].substring(curValue[1].indexOf("{")+1,curValue[1].indexOf(","));
            let offestY = curValue[1].substring(curValue[1].lastIndexOf(",")+1,curValue[1].lastIndexOf("}"));
            mcCfg.res[newName] = {"x":parseInt(x),"y":parseInt(y),"w":parseInt(w),"h":parseInt(h)};
            let frameObj = {"res":newName,"x":parseInt(offestX),"y":parseInt(offestY)};
            arr.push(frameObj);
        }
        mcCfg.mc[firstKey] = {"frameRate":15,"frames":arr};
        let newPath = path.substring(0,path.lastIndexOf("/"))+"/"+firstKey+".json";
        console.log("输出文件----"+newPath)
        fs.writeFile(newPath,JSON.stringify(mcCfg),(err)=>{
            if(err){throw err};
            console.log("转换文件------"+path+"--------成功");
        })
    })
}
