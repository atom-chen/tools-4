#!/usr/local/bin/node
let exec = require('child_process').exec;
let fs = require('fs');
const glob = require("glob");
const param = process.argv.slice(2)[0];

var webp=require('webp-converter');

function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
var Exname = [ 'png','jpg',"jpeg",'webp'];

exec(`rm -rf transResource&&mkdir transResource`);

glob("resource/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
			if(Exname.includes(types)) {
                let newPath = "transResource/"+v.substring(v.lastIndexOf("/")+1);
				webp.dwebp(`${v}`,`${newPath}`,"-o",function(status,error){
					console.log("解析成功----"+`${newPath}`)
				})
                // exec(`dwebp ${v} -o ${newPath}`)
                // exec(`cwebp -q 80 ${v} -o ${newPath}`)
			} 
	})
});
