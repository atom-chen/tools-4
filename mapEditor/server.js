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
console.log('请在浏览器输入---http://本机ip:3000 or http://localhost:3000')
//server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
//console.log('server started on port'+process.env.PORT || 3000);
//handle the socket
io.sockets.on('connection', function(socket) {
    socket.on('exportMapCfg', function(config) {
        if(config.way == "json"){
            fs.writeFile("config.json",JSON.stringify(config.data),(err)=>{
                if(err){console.log(err);return}
                io.sockets.emit('msg', 'exportres');
            })
        }else if(config.way == "xml"){
            fs.writeFile("config.xml",config.data,(err)=>{
                if(err){console.log(err);return}
                io.sockets.emit('msg', 'exportres');
            })
        }
        
    });
    //user leave
    socket.on('disconnect', function() {

        io.sockets.emit('msg', 'logoutres');
    });
    //new message to split picture
    socket.on('splitPic', function(fileCnt,way,fileW,fileH,sliceW,sliceH) {
        var base64Data = fileCnt.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        let col = Math.ceil(fileW/sliceW);
        let row = Math.ceil(fileH/sliceH);
        let tol = col*row;
        let index = 0;
        exec(`rm -rf map&&mkdir map/`,(err,stdout,stderr)=>{
            fs.writeFile("image.png", dataBuffer, function(err) {
                if(err){
                  res.send(err);
                }else{
                    for(let i = 0;i<col;i++){
                        let w = sliceW;
                        let h = sliceH;
                        for(let j = 0;j<row;j++){
                            let key = "";
                            let posx = i*sliceW;
                            let posy = j*sliceH;
                            if(way == "x_y"){
                                key = i+"_"+j+".jpg";
                               
                            }else if(way == "y_x"){
                                key = j+"_"+i+".jpg";
                            }
                            if(posx + sliceW > fileW){
                                w = posx + sliceW - fileW;
                            }
                            if(posy + sliceH > fileH){
                                h = posy + sliceH - fileH;
                            }
                            let rectStr = w+"x"+h+"+"+posx+"+"+posy;
                            exec(`convert -crop ${rectStr} image.png map/${key}`,(error)=>{
                                if(error){console.log(error);return}
                                index += 1;
                                if(index >= tol){
                                    io.sockets.emit('msg', "splitres");
                                }
                            })
                        }
                    }
                }
            });
        });
        
    });
});