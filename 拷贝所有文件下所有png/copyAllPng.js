const fs = require('fs');

const glob = require("glob");

var spawn = require('child_process').spawn;

const filePath = process.argv.slice(2)[0];

function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}

var Exname = [ 'png','jpg',"jpeg",'webp',"json"];
function copyIt(from, to) {

    spawn('cp', ['-rf', from, to]);    
}
console.log(filePath)
//获取所有文件
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
			if(Exname.includes(types)) {
                let fileNameIndex = v.lastIndexOf("/");
                let fileName = v.substring(fileNameIndex);
                let newPath = __dirname+"/pictures"+fileName
                console.log(newPath);
                copyIt(v,newPath);
				// bagpipe.push(fs.readFile,v,'utf-8',(err,data)=>{
				// 	readFileContent(data,v);
				// })
			} 
	})
});