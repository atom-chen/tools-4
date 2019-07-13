const fs = require('fs');
const filePath = process.argv.slice(2)[0];
if(!filePath){
	console.warn('没有选择路径')
}

fs.readFile(filePath,(err,data)=>{
    let jsonObj = JSON.parse(data);
    let jsonStr = JSON.stringify(jsonObj)
    // let jsonArr = jsonObj.split("\n");
    // let newJson = jsonArr.join("")
    let path = filePath.slice(0,filePath.lastIndexOf("/"))
    let new_path = path + "/"+"config2.json";
    fs.writeFile(new_path, jsonStr, function(err) {
        if(err) {
            throw err;
        }
    });
})