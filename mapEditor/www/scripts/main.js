var result = document.getElementById("result"); 
var input = document.getElementById("file_input"); 

this.socket = io.connect();

var select = document.getElementById("selectOpt");
var index = select.selectedIndex; // 选中索引

//导出配置标准
let standSelect = document.getElementById("selectOpt2");
let standIndex = standSelect.selectedIndex;

//地图切片标准
let stand3Select = document.getElementById("selectOpt3");
let stand3Index = stand3Select.selectedIndex;
//格子x轴键值：
let gridXkey = "title_w"
let gridXkeyInput = document.getElementById('gridXkey')
//格子宽：
let gridXvalue = "";
let gridXvalueInput = document.getElementById('gridXvalue')
//格子y轴键值：
let gridYkey = "title_h";
let gridYkeyInput = document.getElementById('gridYkey');
// 格子高：
let gridYvalue = "";
let gridYvalueInput = document.getElementById('gridYvalue');
//切片x轴键值：
let splitXkey = "sliceWidth";
let splitXkeyInput = document.getElementById('splitXkey');
//切片宽：
let splitXvalue = "";
let splitXvalueInput = document.getElementById('splitXvalue');
//切片y轴键值：
let splitYkey = "sliceHeight";
let splitYkeyInput = document.getElementById('splitYkey');
//切片高：
let splitYvalue = "";
let splitYvalueInput = document.getElementById('splitYvalue');
//地图img宽度键值：
let mapWkey = "pixWidth";
let mapWkeyInput = document.getElementById('mapWkey');
//地图img高度键值：
let mapHkey = "pixHeight";
let mapHkeyInput = document.getElementById('mapHkey');
//格子数据集合键值：
let gridsKey = "grids";
let gridsKeyInput = document.getElementById('gridsKey');
//阻挡点-可行走-透明点：
let pointValue = "0-1-2";
let pointValueInput = document.getElementById('pointValue');
//自定义固定属性(json)
let comAttr = "";
let comAttrInput = document.getElementById('comAttr');
//导出格式：
let selectOpt = select.options[index].value;
let rowKey = "rows";
let rowKeyInput = document.getElementById('rowKey');
let colKey = "cols";
let colKeyInput = document.getElementById('colKey');


 
if(typeof FileReader==='undefined'){ 
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
    input.setAttribute('disabled','disabled'); 
}else{ 
    input.addEventListener('change',readFile,false); 
}
let file;
let fileContent;
let fileW;
let fileH;
let canvas;
let context;
let layerContext;
let layerCanvas;
function readFile(){ 
    file = this.files[0]; 
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
        var image = new Image();
        image.className = 'abs'
        image.onload = function () {
            fileW = this.width;
            fileH = this.height;
        };
        fileContent = this.result;
        console.log(fileContent)
        image.src = this.result;
        result.appendChild(image);
    } 
}
let configDialogShowBoo = false; 
let configData = {};
//创建配置弹窗
function createCfg(){
    if(!file){
        alert('请先导出资源图');
        return;
    }
    let configDialog = document.getElementsByClassName("configDialog")[0];
    if(!configDialogShowBoo){
        configDialog.className = 'configDialog show';
        configDialogShowBoo = true;
    }else{
        configDialogShowBoo = false;
        configDialog.className = 'configDialog hide';
    }
    for(let key in configData){
        if(key == "selectOpt"){
            select.options[index].selected = true;  
        }else{
            (key+"Input").value = configData[key];
        }
    }
   
}

//绘制格子
function drawGrid(){
    let gridW = parseInt(configData.gridXvalue);
    let gridH = parseInt(configData.gridYvalue);
    canvas = document.createElement("canvas");
    canvas.style.border = "solid 1px green";
    canvas.id = "canvas";
    canvas.className = 'abs';
    result.appendChild(canvas);
    canvas.width = fileW;
    canvas.height = fileH;
    context = canvas.getContext("2d");

    layerCanvas = document.createElement("canvas");
    layerCanvas.style.border = "solid 1px green";
    layerCanvas.id = "layerCanvas";
    layerCanvas.className = 'abs';
    result.appendChild(layerCanvas);
    layerCanvas.width = fileW;
    layerCanvas.height = fileH;
    layerContext = layerCanvas.getContext("2d");

    configData.colValue = Math.ceil(fileW/gridW);
    configData.rowValue = Math.ceil(fileH/gridH);
    let standValue = standSelect.options[standIndex].value;
    if(standValue == "col"){
        //以列为标准
        for(let i = 0;i<configData.colValue;i++){

            for(let j = 0;j<configData.rowValue;j++){
                let x = i*gridW;
                let y = j*gridH;
                drawRect(x,y,gridW,gridH,context);
            }
        }
    }else{
        //以行为标准
        for(let i = 0;i<configData.rowValue;i++){

            for(let j = 0;j<configData.colValue;j++){
                let x = j*gridW;
                let y = i*gridH;
                drawRect(x,y,gridW,gridH,context);
            }
        }
    }
}
//绘制线条
function drawRect(sx,sy,w,h,ct,color){
    ct.strokeStyle = color|"green";
    ct.lineWidth = 1;
    if(color){
        let str = color 
        ct.fillStyle = str;
        ct.fillRect(sx,sy,w,h);
    }else{
        ct.strokeRect(sx,sy, w, h);  
    }
    
    ct.closePath();   
}
let drawColor;
let drawCfg = {}
let pointValues;
let curPointValue;
//确认配置
function sureClick(){
    createCfg();
    index = select.selectedIndex;
    standIndex = standSelect.selectedIndex;
    stand3Index = stand3Select.selectedIndex;
    configData = {
        gridXkey:gridXkeyInput.value,gridXvalue:gridXvalueInput.value,gridYkey:gridYkeyInput.value,
        gridYvalue:gridYvalueInput.value,splitXkey:splitXkeyInput.value,splitXvalue:splitXvalueInput.value,
        splitYkey:splitYkeyInput.value,splitYvalue:splitYvalueInput.value,mapWkey:mapWkeyInput.value,
        mapHkey:mapHkeyInput.value,gridsKey:gridsKeyInput.value,pointValue:pointValueInput.value,
        comAttr:comAttrInput.value,selectOpt:select.options[index].value,rowKey:rowKeyInput.value,
        colKey:colKeyInput.value,colValue:0,rowValue:0
    }
    if(!gridXkeyInput.value || !gridXvalueInput.value || !gridYkeyInput.value || !gridYvalueInput.value || !splitXkeyInput.value ||
        !splitXvalueInput.value || !splitYkeyInput.value || !splitYvalueInput.value || !mapWkeyInput.value || !mapHkeyInput.value||
        !gridsKeyInput.value || !pointValueInput.value || !rowKeyInput.value || !colKeyInput.value){
            alert("填写完整配置后才可显示绘制）");
            return;
    }
    
    console.log("-------------当前设置配置---------------");
    console.log(configData);
}
//绘制格子区域
let drawFirst = false;
function createGrid(){
    if(!file){
        alert('请先导出资源图');
        return;
    }
    if(!!drawFirst){
        alert("需要刷新页面才可以重新绘制")
        return;
    }
    if(!configData.gridXvalue || !configData.gridYvalue){
        alert("请先完成配置")
        return;
    }
    drawFirst = true;
    this.drawGrid();
    pointValues = configData.pointValue.split('-');
    curPointValue = parseInt(pointValues[1]);
    layerCanvas.addEventListener('mousedown',this.ondown)
    layerCanvas.addEventListener('mousemove',this.onmove)
    layerCanvas.addEventListener('mouseup',this.onup)
}

let touchDown;
function ondown(){
    touchDown = true;
}
function onup(){
    touchDown = false;
    console.log(drawCfg)
}

function onmove(e){
    let gridW = parseInt(configData.gridXvalue);
    let gridH = parseInt(configData.gridYvalue);
    let top = 100;
    let x = e.pageX;
    let y = e.pageY - top;
    let rx = x - (x%gridW);
    let ry = y - (y%gridH);
    if((drawCfg[rx+"_"+ry] || drawCfg[rx+"_"+ry] == 0) && clear && touchDown){
        delete drawCfg[rx+"_"+ry];
        layerContext.clearRect(rx,ry,gridW,gridH);
        return;
    }
    if(drawCfg[rx+"_"+ry] == curPointValue){
        return; 
    }
    if(touchDown && drawColor){
        
        let key = rx+"_"+ry;
        drawCfg[key] = curPointValue;
        layerContext.clearRect(rx,ry,gridW,gridH);
        drawRect(rx,ry,gridW,gridH,layerContext,drawColor);
    }
}
function tabButton(selectIndex){
    let buttons = document.getElementsByTagName('a');
    let button;
    switch(selectIndex){
        case 0:
            button = buttons[2];
            break;
        case 1:
            button = buttons[3];
            break;
        case 2:
            button = buttons[4];
            break;
        case 3:
            button = buttons[5];
            break;
        case 4:
            button = buttons[6];
            break;
    }
    for(let i = 0;i<buttons.length;i++){
        buttons[i].className = "button_up";
    }
    button.className = "button_down";
}
function commonJudge(index,pointVal,color,clearBoo){
    if(!file){
        alert('请先导出资源图');
        return;
    }
    if(!drawFirst){
        alert("请先绘制格子区域");
        return;
    }
    clear = clearBoo;
    drawColor = color;
    console.log(color);
    curPointValue = parseInt(pointValues[pointVal]);
    tabButton(index);
}
//设置阻挡点
function setPoint0(){
    commonJudge(0,0,'rgba(255,0,0,0.5)',false)
}
//设置透明点
function setPoint1(){
    commonJudge(1,2,'rgba(255,255,255,0.5)',false)
    
}
//设置怪物出生点
function setPoint2(){
    commonJudge(2,3,'rgba(0,255,0,0.5)',false)
}
//设置人物出生点
function setPoint3(){
    commonJudge(3,4,'rgba(0,0,255,0.5)',false)
}
let clear = false;
//清除绘制点
function clearPoint(e){
    if(!file){
        alert('请先导出资源图');
        return;
    }
    if(!drawFirst){
        alert("请先绘制格子区域");
        return;
    }
    drawColor = null;
    clear = true;
    tabButton(4);
}
let reversboo = false;
//数据翻转
function reverseData(){
    reversboo = !reversboo;
    if(reversboo){
        alert("翻转成功--请执行导出配置");
    }else{
        alert("恢复标准成功")
    }
}
let outPutBoo = false;
//导出配置
function exportData(){
    let gridW = parseInt(configData.gridXvalue);
    let gridH = parseInt(configData.gridYvalue);
    if(!file){
        alert('请先导出资源图');
        return;
    }
    if(!configData.gridXvalue || !configData.gridYvalue){
        alert("请先完成配置")
        return;
    }
    if(!drawFirst){
        alert("请先绘制格子区域");
        return;
    }
    if(outPutBoo){
        alert("配置正在导出。。请稍后");
        return;
    }
    outPutBoo = true;
    let standValue = standSelect.options[standIndex].value;
    let arr = [];
    if(standValue == "col"){
        for(let i = 0;i<configData.colValue;i++){
            arr[i] = [];
            for(let j = 0;j<configData.rowValue;j++){
                let x = i*gridW;
                let y = j*gridH;
                let key = x+"_"+y
                if(!drawCfg[key] && drawCfg[key] != 0){
                    arr[i].push(parseInt(pointValues[1]));
                }else{
                    arr[i].push(parseInt(drawCfg[key]))
                }
            }
        }
    }else{
        for(let i = 0;i<configData.rowValue;i++){
            arr[i] = [];
            for(let j = 0;j<configData.colValue;j++){
                let x = j*gridW;
                let y = i*gridH;
                let key = x+"_"+y
                if(!drawCfg[key] & drawCfg[key] != 0){
                    arr[i].push(parseInt(pointValues[1]));
                }else{
                    arr[i].push(parseInt(drawCfg[key]));
                }
            }
        }
    }
    console.log(arr);
    if(reversboo){
       arr = arr.reverse();
    }
    let newarr = [];
    for(let m = 0;m<arr.length;m++){
        for(let k = 0;k<arr[m].length;k++){
            newarr.push(arr[m][k]);
        }
    }
    var index = select.selectedIndex;
    let selectOpt = select.options[index].value;
    console.log('------导出方式-----'+selectOpt);
    if(selectOpt == "json"){
        let jsonObj = {};
        jsonObj[configData.gridsKey] = newarr;
        jsonObj[configData.gridXkey] = parseInt(configData.gridXvalue);
        jsonObj[configData.gridYkey] = parseInt(configData.gridYvalue);
        jsonObj[configData.splitXkey] = parseInt(configData.splitXvalue);
        jsonObj[configData.splitYkey] = parseInt(configData.splitYvalue);
        jsonObj[configData.mapWkey] = parseInt(fileW);
        jsonObj[configData.mapHkey] = parseInt(fileH);
        jsonObj[configData.colKey] = parseInt(configData.colValue);
        jsonObj[configData.rowKey] = parseInt(configData.rowValue);
        if(configData.comAttr){
            let comobj = JSON.parse(configData.comAttr);
            for(let key in comobj){
                jsonObj[key] = comobj[key];
            }
        }
        
        this.socket.emit('exportMapCfg', {data:jsonObj,way:"json"});
    }else if (selectOpt == "xml"){
        let head = `<?xml version="1.0" encoding="UTF-8"?>\n<map>\n`+
        `\t<${configData.gridXkey}>${parseInt(configData.gridXvalue)}</${configData.gridXkey}>\n`+
        `\t<${configData.gridYkey}>${parseInt(configData.gridYvalue)}</${configData.gridYkey}>\n`+
        `\t<${configData.splitXkey}>${parseInt(configData.splitXvalue)}</${configData.splitXkey}>\n`+
        `\t<${configData.splitYkey}>${parseInt(configData.splitYvalue)}</${configData.splitYkey}>\n`+
        `\t<${configData.mapWkey}>${parseInt(fileW)}</${configData.mapWkey}>\n`+
        `\t<${configData.mapHkey}>${parseInt(fileH)}</${configData.mapHkey}>\n`+
        `\t<${configData.colKey}>${parseInt(configData.colValue)}</${configData.colKey}>\n`+
        `\t<${configData.rowKey}>${parseInt(configData.rowValue)}</${configData.rowKey}>\n`;
        if(configData.comAttr){
            let comobj = JSON.parse(configData.comAttr);
            for(let key in comobj){
                head += `\t<${key}>${comobj[key]}</${key}>\n`;
            }
        }
        head += `\t<${configData.gridsKey}>${newarr}</${configData.gridsKey}>\n</map>`;
        this.socket.emit('exportMapCfg', {data:head,way:"xml"});
    }
    
}
let sliceBoo = false;
//导出切片
function exportSlice(){
    if(!file){
        alert('请先导出资源图');
        return;
    }
    if(!configData.gridXvalue || !configData.gridYvalue){
        alert("请先完成配置")
        return;
    }
    if(!drawFirst){
        alert("请先绘制格子区域");
        return;
    }
    if(sliceBoo){
        alert("正在切片中，请稍后。。。");
        return;
    }
    sliceBoo = true;
    let stand = stand3Select.options[stand3Index].value;
    this.socket.emit('splitPic', fileContent,stand,fileW,fileH,parseInt(configData.splitXvalue),parseInt(configData.splitYvalue));
}
this.socket.on('msg', function(param) {
    console.log("S2C----"+param)
    if(param == "exportres"){
        outPutBoo = false;
        alert("导出地图配置文件成功")
    }else if(param == "splitres"){
        sliceBoo = false;
        alert("地图切片成功");
    }
});

