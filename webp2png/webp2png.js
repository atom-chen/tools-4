#!/usr/local/bin/node
let exec = require('child_process').exec;
let fs = require('fs');
const glob = require("glob");
const param = process.argv.slice(2)[0];

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
                let newPath = "transResource/"+v.substring(v.lastIndexOf("/")+1)
                exec(`dwebp ${v} -o ${newPath}`)
                // exec(`cwebp -q 80 ${v} -o ${newPath}`)
			} 
	})
});
