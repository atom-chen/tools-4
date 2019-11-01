var fs = require("fs");
var path = require('path');
var xlsx = require('node-xlsx');
var arguments = process.argv.splice(2);
//console.dir(arguments);
//return false;
var epath = arguments[0]; //exsel的路径
var http = require('http');
var querystring = require('querystring');
var allLink = [];
//var originId = 100000;
// if(!epath) {
// 	console.log('清先指定Exsel文件路径！');
// 	return false;
// }
// var sheets = xlsx.parse(epath); //获取到所有sheets
var newIdArr = [];
var newIdArrs = '';
var queue = [];
var curId = 0;

fs.readFile("spider/output.txt",(err,data)=>{
	if(err){
		console.log(err);
	}
	let arr = data.toString().split("\\n");
	for(let i = 0;i<arr.length;i++){
		// var reg = new RegExp('"',"g");  
		// var newStr = str.replace(reg, "");
		arr[i] = arr[i].replace('"',"");
		arr[i] = arr[i].replace("'","");
		newIdArr.push(arr[i]);
	}
	// str.replace("\n","");
})

// sheets.forEach(function(sheet) {
// 	//  console.log(sheet['name']);
// 	for(var rowId in sheet['data']) {
// 		//      console.log(rowId);
// 		var row = sheet['data'][rowId];
// //		console.log(row[0]);
// //'com.znjjxp4.qjsktcz'
// //		getZiyuan(row[0]);
// if(row.toString().length>0){
// 	newIdArr.push(row[0]);
// newIdArrs+=row[0]+'|';
// }
		
// 	}
// });
//console.dir(newIdArr);
//console.dir(newIdArrs.split('|'));


console.log(newIdArr)

//getZiyuan
function sdfsdf(curs) {
	var curIds = newIdArr[curId];
	
	var option = {
	hostname: 'back.h5.h5youyou.com',
	port: 80, //端口号 https默认端口 443， http默认的端口号是80
	path: '/game/setting',
	method: 'POST',
	headers: {
		'Accept': '*/*',
		'Accept-Encoding': 'utf-8', //这里设置返回的编码方式 设置其他的会是乱码'Accept-Encoding': 'utf-8',
		'Accept-Language': 'zh-cn',
		'Connection': 'keep-alive',
		"Content-Type": "application/x-www-form-urlencoded",
		'Cookie': '_identity=dc4b824ce211c31349bfc3337b822c8a4f4e56a3848cde6f2c53366f358e2dbaa%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A44%3A%22%5B1%2C%22SdHNCK3ByJWnv2ZY4RPUHg0BB89OOdVf%22%2C43200%5D%22%3B%7D; expires=Sat, 17-Nov-2018 00:30:28 GMT; Max-Age=43200; path=/; HttpOnly',
		'Host': 'back.h5.h5youyou.com',
		//		'Referer': '',
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
	}
};
	var Datas = querystring.stringify({
		name: curIds,
		status: -1
	});
	function uniq(array){
	    var temp = {}, r = [], len = array.length, val, type;
	    for (var i = 0; i < len; i++) {
	        val = array[i];
	        type = typeof val;
	        if (!temp[val]) {
	            temp[val] = [type];
	            r.push(val);
	        } else if (temp[val].indexOf(type) < 0) {
	            temp[val].push(type);
	            r.push(val);
	        }
	    }
	    return r;
	}
	function httpString(s) {
		var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
		//var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		//var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
		//var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
		var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
		//var reg= /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
		//v = v.replace(reg, "<a href='$1$2'>$1$2</a>"); //这里的reg就是上面的正则表达式
		//s = s.replace(reg, "$1$2"); //这里的reg就是上面的正则表达式
		s = s.match(reg);
		//      console.log(s)
		return(s)
	}
	var post_req = http.request(option, function(response) {
		var responseText = [];
		var size = 0;
		response.on('data', function(data) {
			responseText.push(data);
			size += data.length;
		});
		response.on('end', function() {
			// Buffer 是node.js 自带的库，直接使用
			responseText = Buffer.concat(responseText, size);

			var urls = httpString(responseText.toString());
//			console.log(urls,curIds);
			
			if(!urls){
				queue[curs] = 'null'
			}else{
				var temp = uniq(urls);
				temp.forEach(function(v, i) {
					if(v.indexOf("http") == 0) {
	//					console.log(v+'	',curIds);
						queue[curs] = v;
					}else{
	//					console.log(v+'	',curIds);
						queue[curs] = "未配置";
					}
				});
			}
			
			
		});
	});

	// post the data
	post_req.write(Datas);
	post_req.end();
};
var timer = setInterval(function(){
	var curIds = newIdArr[curId];
		sdfsdf(curId);
	curId++;
	if(curId>=newIdArr.length){
		clearInterval(timer);
		setTimeout(function(){
			fs.writeFile(__dirname+"/output.txt",JSON.stringify(queue.join("@_@_@")),(err)=>{
				if(err){
					console.log(err);
				}
			})
			queue.forEach(function(v,i){
				// console.log(v);
			})
		},3000)
//		console.dir(queue);
	}
	
	
},50)
