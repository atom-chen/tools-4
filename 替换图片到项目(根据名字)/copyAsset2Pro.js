
var fs = require('fs');
const glob = require("glob");
const exec = require('child_process').exec;
const filePath = process.argv.slice(2)[0];
const tarPath = process.argv.slice(2)[1];

if(!filePath){
    console.log("请输入待拷贝目录");
    return;
}
if(!tarPath){
    console.log("请输入目标目录");
    return;
}
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
var Exname = [ 'png','jpg'];
let filePaths = [];
let fileNames = [];
function getFileName(path){
	let index = path.lastIndexOf("/");
	let name = path.substr(index+1);
	return name;
}
let fileboo = false;
let tarboo = false;
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
		if(Exname.includes(types)) {
			filePaths.push(v);
			fileNames.push(getFileName(v));
		} 
		fileboo = true;
		if(tarboo){

		}
	})
});
let tarPaths = [];
let tarNames = [];
glob(tarPath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
		if(Exname.includes(types)) {
			tarPaths.push(v);
			tarNames.push(getFileName(v));
		} 
		tarboo = true;
		if(fileboo){

		}
	})
});
