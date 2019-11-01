const fs = require('fs');
const glob = require("glob");
const param = process.argv.slice(2)[0];
var spawn = require('child_process').spawn;
const readline = require('readline');
const files = fs.readdirSync(`${__dirname}/gameModule`);

var Grid = require("console-grid");
var grid = new Grid();
var data = {
    option: {
        sortField: "name"
    },
    columns: [{
        id: "name",
        name: "Name",
        type: "string",
        maxWidth: 38
    }, {
        id: "value",
        name: "Value",
        type: "string",
        maxWidth: 7
    }],
    rows: []
}
for(let key in files){
	if(files[key] == ".DS_Store" || files[key] == ".git"){continue}
	let obj = {
		name:files[key],
		value:key
	}
	data.rows.push(obj);
}
grid.render(data);

//捕获输入
function readSyncByRl(tips) {
    tips = tips || '> ';
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(tips, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}
let snippetTemple = {
	"prefix": "",
	"body": [],
	"description": ""
}
let curModuleStr = "";
readSyncByRl('请输入引入模块的对应value值：').then((res) => {
	let modulestr = files[res];
	if(!!modulestr){
		curModuleStr = modulestr;
		console.log(`即将引入模块${modulestr}`);
		let moduleFile = `${__dirname}/gameModule/${modulestr}/${modulestr}.ts`;
		fs.readFile(moduleFile,(err,data)=>{
			let datastr = data.toString();
			let dataArr = datastr.split("\n");
			snippetTemple.prefix = modulestr;
			snippetTemple.body = dataArr;
			snippetTemple.description = modulestr;
			console.log("\n");
			console.log("------------准备写入模版---------")
			exec();
		})
	}else{
		console.warn("请输入正确的value值")
	}
});
function exec(){
	let index = __dirname.indexOf("/",7);
	let static_path = "Library/Application Support/EgretWing/User/snippets/typescript.json"
	let topath = __dirname.slice(0,index+1);
	let realPath = topath + static_path;
	if(param == "c"){
		execWriteToSnip(realPath,{});
	}else{
		fs.readFile(realPath,(err,data)=>{
			if(err){
				console.log(err);
				return;
			}
			let datastr = data.toString()
			if(!!~datastr.indexOf(this.curModuleStr)){
				return;
			}else{
				datastr = datastr.replace(/(\n)|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g, '');
				let obj = JSON.parse(datastr)
				obj[curModuleStr] = snippetTemple;
				execWriteToSnip(realPath,obj);
			}
		})
	}
	
	// fs.readFile()
}
function execWriteToSnip(path,data){
	fs.writeFile(path,JSON.stringify(data),(err)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log("-------写入成功-------");
	})
}


// console.log()
// exec(`sh down.sh`,(err,stdout,stderr)=>{
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
// 	// const files = fs.readdirSync()
// 	exec("mkdir aa");
// });

// let proc = spawn(`sh`,[`${__dirname}/gameModule/down.sh`])
	
// proc.stdout.on('data', function (data) { 
// 	console.log(data.toString())
// })



// files.forEach(function (item, index) {
//     let stat = fs.lstatSync("./components/" + item)
//     if (stat.isDirectory() === true) { 
//       components.push(item)
//     }
// })

