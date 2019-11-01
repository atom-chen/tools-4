
let comAttrInput = document.getElementById('comAttr');
let comAttrInput2 = document.getElementById('comAttr2');

this.socket = io.connect();

function createCfg(){
    if(comAttrInput.value){
        this.socket.emit('getPackageUri', {data:comAttrInput.value});
    }else{
        alert("请先输入配置包名");
    }
}

        

this.socket.on('uriFinish', function(param) {
    // let str = param.join("\n")
    var reg = new RegExp('@_@_@',"g");  
    let str = param.replace(reg,"\n")
    var reg2 = new RegExp('"',"g");
    str = str.replace(reg2,"");
    comAttrInput2.value = str
});

