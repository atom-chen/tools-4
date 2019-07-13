;(function(){
    'use strict';
    function getsec(str)
    {
        if(str == "Infinity"){
            return "Fri, 31 Dec 9999 23:59:59 GMT";
        }
        var str1=str.substring(1,str.length)*1;
        var str2=str.substring(0,1);
        if (str2=="s")
        {
            return str1*1000;
        }
            else if (str2=="h")
        {
            return str1*60*60*1000;
        }
        else if (str2=="d")
        {
            return str1*24*60*60*1000;
        }
    }
    function setCookie(name,value,time)
    {
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
    let param1 = getCookie("isFirst")
    if(!param1){
        setCookie("isFirst",1,"Infinity")
        setCookie("isOnline","off","s5");
        return;
    }else{
        let param2 = getCookie("isOnline");
        if(!param2){
             //不存在 已过期
             window.onload = function(){
                var parses = document.createElement("script");
                parses.type  = "text/javascript";
                parses.src = 'js/parsing.js'
                document.getElementsByTagName("HEAD")[0].appendChild(parses);
                document.getElementsByTagName("HEAD")[0].removeChild(parses);
            }
        }
    }
})()