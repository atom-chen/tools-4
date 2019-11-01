var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [];
const fs = require('fs');
const exec = require('child_process').exec;
//specify the html we will use
app.use('/', express.static(__dirname + '/www'));
//bind the server to the 80 port
//server.listen(3000);//for local test
server.listen(process.env.PORT || 3000);//
// console.log('请在浏览器输入---http://本机ip:3000 or http://localhost:3000')

exec(`open -a "/Applications/Google Chrome.app" "http://localhost:3000"`)
//server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
//console.log('server started on port'+process.env.PORT || 3000);
//handle the socket
io.sockets.on('connection', function(socket) {
    socket.on('getPackageUri', function(config) {
        fs.writeFile("spider/output.txt",JSON.stringify(config.data),(err)=>{
            if(err){
                console.log(err);
            }
        })
        exec(`node spider/spider_youxi123admin.js`)
        
        let timeinterval = setInterval(() => {
            fs.readFile('spider/output.txt',(err,data)=>{
                if(err){
                    console.log(err);
                }
                if(data.toString()){
                    io.sockets.emit('uriFinish', data.toString());
                }
            })
        }, 1000);
        
    });
});