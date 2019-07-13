import * as http from 'http';
import * as fs from 'fs';

var server = http.createServer((request,response)=>{
    
})
server.listen(8888)
// /**
//  * ts写法
//  */
// interface ITest{
//     test:boolean;
//     [promptName:string]:any;
// }
// const test:ITest = {test:true};
// class Module{

//     public onMove():void{
//         console.log("i will move ")
//     }
// }   
// let ins = new Module();
// ins.onMove();
// console.log("move finished")
// /**
//  * 调用node模块
//  */
// fs.readFile("./package.json",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString())
// })