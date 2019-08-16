var fs = require('fs');
var exec = require('child_process').exec;
var request = require('request');



wordGather = []
fs.readFile('word.txt',(err,data)=>{
    let wordStr = data.toString();
    wordStr = wordStr.replace(/[；]/g, ";"); //去掉回车换行
    wordArr = (data.toString()).split(';')
    for(let i = 0;i<wordArr.length;i++){
        if(!~wordGather.indexOf(wordArr[i])){
            wordGather.push(wordArr[i]);
        }
    }
    exec('rm -rf library&&mkdir library')
    downLoadWord(wordGather.shift());
})
function downLoadWord(word){
    if(!word){
        if(wordGather.length){
            downLoadWord(wordGather.shift());
        }
        return;
    }
    let url = `http://sp0.baidu.com/-rM1hT4a2gU2pMbgoY3K/gettts?lan=en&text=${word}&spd=2&source=alading`
    var req = request(url, {timeout: 10000, pool: false});
    req.setMaxListeners(50);
    req.setHeader('user-agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36');

    req.on('response', function(res) {
        res.setEncoding("binary");
        var fileData = "";

        res.on('data', function (chunk) {
            fileData+=chunk; 
        });
        res.on('end',function(){
            fs.writeFile(`./library/${word}.mp3`, fileData, "binary", function(err){
                if(err){
                    console.log("[downloadPic]文件   下载失败.");
                    console.log(err);
                }else{
                    console.log("文件下载成功---"+word+".mp3");
                    if(wordGather.length){
                        let timeout = setTimeout(function() {
                            clearTimeout(timeout);
                            downLoadWord(wordGather.shift());
                        }, 1500);
                        
                    }
                }
            });  
        });
    })
}

