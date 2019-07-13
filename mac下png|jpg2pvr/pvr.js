// # texturetool---IOS sdk自带
// # 适用3D模型中
// # 1. 所有的图片必须宽与高相等并且是2的次方(8,16,32,64,128,256,512,1024)
// # 2. 图片的没有被压缩过。
// # -------------------------
// # shell命令
const glob = require("glob");
const filePath = process.argv.slice(2)[0];
var exec = require('child_process').exec;

if(!filePath){
    console.log("请输入文件目录路径");
    return;
}
let BIN=`/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin`;

var Exname = [ 'png','jpg'];
function getExn(dir) {
	if(!dir) {
		return false;
	}
	var dirArr = dir.split('.');
	var dirArrLen = dirArr.length;
	return dirArr[dirArrLen - 1]
}
glob(filePath + "/**/*.*", function(er, files) {
	files.forEach(function(v, i) {
		var types = getExn(v);
        if(Exname.includes(types)) {
            let outpath = v.replace(types,"pvr");
            exec(`${BIN}/texturetool -m -f PVR -e PVRTC ${v} -o ${outpath}`);
        } 
	})
});
