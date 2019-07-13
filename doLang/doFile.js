/**
 * 翻译脚本
 * npm run do [project-path] [翻译api为存在的语言-详情看参数]
 * param1 目录
 * param2 api未提供的翻译语言 繁体  参数 ft 
 * 
 * pg: 翻译为英文时  当脚本跑完时（因未知错误） 需要运行formatExml脚本 格式化一下皮肤文件 
 * 翻译为繁体时  压缩的config.json 需要先format-json 
 */
const fs = require('fs');
const path = require('path');
const glob = require("glob");
const Table = require('cli-table2');
const filePath = process.argv.slice(2)[0];
const langType = process.argv.slice(2)[1];
const Bagpipe = require('bagpipe');
var spawn = require('child_process').spawn;
var ProgressBar = require('./ProgressBar');


if(!filePath){
	console.warn('没有选择路径')
}
const Translator = require('./translator');
let translator = new Translator();

var bagpipe = new Bagpipe(10);


let maxTransNum = 3000;
// var re = /[\u4E00-\u9FA5]+|[\uFE30-\uFFA0]+/ig; // 判断是否有汉字的正则表达式
var re = /[\u4E00-\u9FA5]+/ig;

let re2 = /\"/g; //去掉引号
var Exname = [ 'html','ts',"json",'exml'];
// var Exname = [ 'exml'];

// config the translator
translator.config = {
	from: 'zh_CHS', // zh-CHS(中文) || ja(日语) || EN(英文) || fr(法语) ...
	to: 'EN',
	// appKey: '40b44d21dd73cb0f',
	// secretKey: 'hcrCNLeJdgSCryMQ6pNNqmpOJwezca4s'
	// appKey:'5fecce7acca9e179',
	// secretKey: 't9i0PEW93R8VhVpKxaiUXdVKZWj1mVnq'
	appKey:'4efe37f32b960a56',
	secretKey: 'OORrgRRA2kMMOXd9ZoUla2VuRtuwlcKU'
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

function toArrayBuffer(buf) {
	var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return view;
}
function toBuffer(ab) {
    var buf = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

function getZipTolFontNum(gather){
	let arr = gather[0].match(re);
	if(!arr){
		return 0;
	}
	let num = 0;
	for(let i = 0;i<arr.length;i++){
		num+=arr[i].length;
	}
	return num;
}
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
function transLateFun(colomn,cnArr,itemIndex,path,totalNUM,callFunc,jsonSplit){
	
	translator.translate(cnArr,itemIndex,path,function(transStr,itemIndex,pathstr,wordArr){
		let ress = transStr;
		let dataStr;
		let suffix = pathstr.slice(pathstr.lastIndexOf('.'));
		if(!jsonSplit){
			var needRetrans = colomn[itemIndex].toString();
			wordArr.forEach(function(v, k) {
				var enStr = ress.split(',') ;
				// var re = new RegExp(v, "g", "i");
				enStr[k] = enStr[k].replace(re2,"");
				var needRetranss = needRetrans.replace(wordArr[k], enStr[k]);
				needRetrans = needRetranss.toString();
				colomn[itemIndex] = needRetrans;
			})
			if(suffix == ".exml"){
				// dataStr = colomn.join('\n');
				fs.writeFile(pathstr, colomn.join("\n"), function(err) {
					if(err) {
						throw err;
					}
				});
			}else if(suffix == ".ts" || suffix == ".html"){
				dataStr = colomn.join('\n');
			}else{
				dataStr = colomn.join('');
			}
		}else{
			dataStr = transStr;
		}
		if(suffix != ".exml"){
			callFunc(pathstr,dataStr);
		}
	});
}
let singleDealFile = [];
let singleIndex = 0;
let singleTolEn = 0;
var pb = new ProgressBar('翻译进度', 50);
//翻译繁体操作
function transFT(colomn,pathstr){
	console.log("开启翻译文件-----------"+pathstr)
	let dataStr = "";
	for(let item = 0; item < colomn.length; item++) {
		if(colomn[item].match(re) && colomn[item].match(re).length && colomn[item].trim() != '') { //如果有汉字，输出文件和所在行数
			let cnArr = colomn[item].match(re);
			singleDealFile.push({cnArr:cnArr,item:item});
		}
		if(item >= colomn.length -1){
			//当前是最后一个匹配时
			if(singleDealFile.length){
				singleTolEn = singleDealFile.length;
				singleTrans(colomn,pathstr);
			}else{
				if(dealFiles.length){
					let obj = dealFiles.shift();
					transFT(obj.colomn,obj.path)
				}else{
					curOper = false;
				}
			}
		}
	}
}
function singleTrans(colomn,pathstr){
	let new_cnArr = [];
	let obj = singleDealFile.shift();
	let cnArr = obj.cnArr;
	let item = obj.item;
	let str = cnArr.join("thisisasplit");
	let proc = spawn(`python`,['trans.py',str]);
	
	proc.stdout.on('data', function (data) { 
		singleIndex += 1;
		pb.render({ completed: singleIndex, total: singleTolEn });
		let str = 'standard output:\n' + data;
		let dataStr = str.split('\n')[1]
		stdout = dataStr.replace(/[\n]/g, ""); //去掉回车换行
		let arr = stdout.split("thisisasplit");
		new_cnArr = arr;
		if(colomn[item]){
			var needRetrans = colomn[item].toString();
			cnArr.forEach(function(v, k) {
				// var re = new RegExp(v, "g", "i");
				if(new_cnArr[k]){
					new_cnArr[k] = new_cnArr[k].replace(re2,"");
					// console.log(needRetrans)
					var needRetranss = needRetrans.replace(cnArr[k], new_cnArr[k]);
					// console.log(needRetranss)
					needRetrans = needRetranss.toString();
					
					colomn[item] = needRetrans;
				}
			})
		}
		
		if(singleDealFile.length){
			singleTrans(colomn,pathstr);
		}else{
			singleIndex = 0;
			console.log("当前文件翻译完成-----------"+pathstr)
			fs.writeFile(pathstr, colomn.join("\n"), function(err) {
				if(err) {
					throw err;
				}
			});
			if(dealFiles.length){
				let obj = dealFiles.shift();
				transFT(obj.colomn,obj.path)
			}else{
				curOper = false;
			}
		}
	});
}
let dealFiles = [];
let curOper = false;
//处理所有的词
 function readFileContent(data,path) {
		if(!data){return}
		var colomn = data.split("\n");
		let totalNUM = 0;
		// var result = [];
		// var resultArray = [];
		//          console.log(colomn);
		let index = 0;
		if(langType == "ft"){
			//翻译为繁体
			dealFiles.push({colomn:colomn,path:path});
			if(!curOper){
				let obj = dealFiles.shift();
				curOper = true;
				transFT(obj.colomn,obj.path)
			}
			return;
		}
		console.log("开始翻译文件-------"+path);
		let fontNum = getZipTolFontNum(colomn);
		//处理压缩文件或者当前受元素匹配到的汉字超过最大值
		if(fontNum >=maxTransNum){
			let arr = colomn[0].match(re);
			let num = 0,itemArr = [],totalArr = [];
			for(let i = 0;i<arr.length;i++){
				num+=arr[i].length;
				itemArr.push(arr[i]);
				if(i >= (arr.length - 1) && num < maxTransNum){
					totalArr.push(itemArr);
				}
				if(num >= maxTransNum){
					//到达翻译最大字符数
					totalArr.push(itemArr);
					num = 0;
					itemArr = [];
				}
			}
			totalNUM = totalArr.length;
			let jsonStr = "";
			for(let j = 0;j<totalArr.length;j++){
				transLateFun(colomn,totalArr[j],0,path,totalNUM,(pathstr,dataStr)=>{
					index += 1;
					jsonStr = index != 1?(jsonStr + ","+dataStr):dataStr;
					
					if(index >= totalNUM){
						var needRetrans = colomn[0].toString();
						arr.forEach(function(v, k) {
							var enStr = jsonStr.split(',') ;
							var re = new RegExp(v, "g", "i");
							enStr[k] = enStr[k].replace(re2,"");
							var needRetranss = needRetrans.replace(arr[k], enStr[k]);
							needRetrans = needRetranss.toString();
							colomn[0] = needRetrans;
						})
						fs.writeFile(pathstr, colomn.join(""), function(err) {
							if(err) {
								throw err;
							}
						});
					}
				},1);
			}
		}else{
			for(var i = 0; i < colomn.length; i++) {
				if(colomn[i].match(re) && colomn[i].match(re).length && colomn[i].trim() != '') { 
					// console.log(colomn[i])
					totalNUM+=1;
				}
			}
			for(let item = 0; item < colomn.length; item++) {
				if(colomn[item].match(re) && colomn[item].match(re).length && colomn[item].trim() != '') { //如果有汉字，输出文件和所在行数
					// result.push(item + 1);
					// result.push(colomn[item]);
					let cnArr = colomn[item].match(re);
						
					transLateFun(colomn,cnArr,item,path,totalNUM,(pathstr,dataStr)=>{
					
						index += 1;
						console.log("当前翻译文件------->"+pathstr+"<-------内部进度----------->"+index+"/"+totalNUM)
						if(index >= totalNUM || (index%1000)==0){
							fs.writeFile(pathstr, dataStr, function(err) {
								if(err) {
									throw err;
								}
							});
						}
					},0);
					
				}
			}
		}
}