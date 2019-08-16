// use node pvr.js {filepath} -file
var fs = require("fs");
var imageSize = require("image-size");
var path = require("path");

var resPath = process.argv[2];

let isFile = false;
for (arg of process.argv) {
	if (arg == '-file') {
		isFile = true;
		break;
	}
}

console.log(resPath);
// var mapPath = "../../test/battle";
var list = fs.readdirSync(resPath);
var generatePVRList = [];
for (var i = 0; i < list.length; i++) {
	var item = path.join(resPath, list[i]);
	console.log(item)
	var stat = fs.lstatSync(item);
	//只生成碎图pvr
	if (stat.isDirectory()) {
		var list2 = fs.readdirSync(item);
		for (var j = 0; j < list2.length; j++) {
			var item2 = path.join(item, list2[j]);
			if (item2.indexOf(".jpg") != -1 || item2.indexOf(".png") != -1) {
				generatePVRList.push(item2);
			}
		}
	} else if (isFile) {
		if (item.indexOf(".jpg") != -1 || item.indexOf(".png") != -1) {
			generatePVRList.push(item);
		}
	}
}

next();

function next() {
	var resPath = generatePVRList.shift();
	if (resPath) {
		generatePVR(resPath, next);
	}
}

function generatePVR(resPath, callback) {
	console.log("generatePVR : " + resPath);
	var pvrPath = resPath.replace(".jpg", ".pvr");
	pvrPath = pvrPath.replace(".png", ".pvr");
	var child_exec = require('child_process');
	imageSize(resPath, function (err, dimensions) {
		var imageWidth = dimensions.width;
		var imageHeight = dimensions.height;
		var max = Math.max(imageWidth, dimensions.height);
		var size = 2;
		while (size < max) {
			size *= 2;
		}

		var command = "PVRTexToolCLI -i " + resPath + " -f pvrtc1_2 -o " + pvrPath + " -p";
		var borderWidth = 0;
		var borderHeight = 0;
		if (imageWidth != size || imageHeight != size) {
			// command +=  " -rcanvas " + size + "," + size;
			if (imageWidth % 2 != 0 || borderHeight % 2 != 0) {
				throw "图片宽高必须是偶数" + resPath;
			}
			borderWidth = (size - imageWidth >> 1);
			borderHeight = (size - imageHeight >> 1);
			command += " -b " + borderWidth + "," + borderHeight;
		}
		// console.log(command);
		var build = child_exec.exec(command);
		build.stderr.on("data", (data) => {
			console.log(data);
		});
		build.stdout.on("data", (data) => {
			console.log(data);
		});
		build.on("exit", (result) => {
			bufferList = [];
			var buffer = new Buffer(7).fill(0);
			buffer.write("egret");//egret头
			buffer[5] = 0x21;//纹理
			buffer[6] = 2;//块数量
			bufferList.push(buffer);
			var list = ["body", "ext"];
			for (var i = 0; i < list.length; i++) {
				var buffer;
				switch (list[i]) {
					case "body":
						var content = fs.readFileSync(pvrPath);
						buffer = new Buffer(6 + content.length).fill(0);
						buffer[0] = 1;//块标签
						buffer[1] = 1;//块压缩方式
						buffer.writeUInt32BE(content.length, 2);//块数据长度
						content.copy(buffer, 6);//块数据
						break;
					case "ext":
						buffer = new Buffer(14).fill(0);
						buffer[0] = 1;//块标签
						buffer[1] = 1;//块压缩方式
						buffer.writeUInt32BE(4, 2);//块数据长度
						buffer.writeUInt16BE(imageWidth, 6);//块数据-原图宽度
						buffer.writeUInt16BE(imageHeight, 6 + 2);//块数据-原图高度
						buffer.writeUInt16BE(borderWidth, 6 + 4);//块数据-边框宽度
						buffer.writeUInt16BE(borderHeight, 6 + 6);//块数据-边框高度
						break;
				}
				bufferList.push(buffer);
			}
			var finalBuffer = Buffer.concat(bufferList);
			fs.writeFileSync(pvrPath, finalBuffer);
			callback();
		});
	});
}
