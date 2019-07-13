const fs = require('fs');

fs.readFile("000002.txt",(err,data)=>{
    let str = data.toString();
    str = str.replace(/[ ]/g, "");    //去掉空格
    str = str.replace(/[\r]/g, ""); //去掉回车换行
    arr = str.split("\n")
    console.log(arr)
})