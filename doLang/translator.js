const request = require('request-promise')
var crypto = require('crypto');
const Bagpipe = require('bagpipe');

/**
 * 翻译器
 */
function Translator() {
  this.config = {
    from: '',
    to: '',
    appKey: '',
    secretKey: '',
  }
}
var transBagpipe = new Bagpipe(10);
/**
 * md5加密
 */
Translator.prototype.md5 = function md5(str) {
  var crypto_md5 = crypto.createHash("md5");
  crypto_md5.update(str);
  return crypto_md5.digest('hex');
}

/**
* 生成[0,n]区间的随机整数
* 比如生成[0,100]的闭区间随机整数，getRandomN(100)
*/
Translator.prototype.getRandomN = function getRandomN(roundTo) {
  return Math.round(Math.random() * roundTo);
}

/**
 * {a:'111',b:'222'} => a=111&b=222
 */
Translator.prototype.generateUrlParams = function generateUrlParams(_params) {
  const paramsData = [];
  for (const key in _params) {
    if (_params.hasOwnProperty(key)) {
      paramsData.push(key + '=' + _params[key]);
    }
  }
  const result = paramsData.join('&');
  return result;
}

// Translator.prototype.wordArr = [];
// Translator.prototype.callBackFunc = null;
// Translator.prototype.itemIndex = 0;
/**
 * 进行翻译
 */
Translator.prototype.translate = function (word,item,path,callBackFunc) {
  
  // let url = `http://openapi.youdao.com/api?q=${encodeURI(q)}&from=${from}&to=${to}&appKey=${appKey}&salt=${salt}&sign=${sign}`;
  // let url = youdaoHost + '?' + this.generateUrlParams(paramsJson);
  let youdaoHost = 'https://openapi.youdao.com/api';
  // 在get请求中，中文需要进行uri编码
  let wordStr = word.length >1?word.join("\n"):word[0];
  let encodeURIWord = encodeURI(wordStr);
  
  let salt = this.getRandomN(1000);
  let sign = this.md5(this.config.appKey + wordStr + salt + this.config.secretKey);
  let paramsJson = {
    q: encodeURIWord,
    from: this.config.from,
    to: this.config.to,
    appKey: this.config.appKey,
    salt: salt,
    sign: sign
  }
  let params = { 
    url: youdaoHost,
    method:'post',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form:paramsJson
  }
  transBagpipe.push(request,params,function(err,data){
     var bodyjson = {};
     if(err){
       console.error(err)
     }
      try {
        if(data && data.body){
          bodyjson = JSON.parse(data.body);
        }
        
      } catch (error) {
        console.error(error);
      }
      if(bodyjson["translation"] && bodyjson["translation"].length){
        let arr = bodyjson["translation"][0].split("\n");
        console.log(arr)
        callBackFunc(arr.join(","),item,path,word);
      }else{
        console.log("当前访问w次数太多-----------导致翻译失败-------》"+word)
        callBackFunc(word.join(","),item,path,word);
      }

  })
  // request({ 
  //   url: youdaoHost,
  //   method:'post',
  //   headers:{
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   form:paramsJson
  // },function(error,response,body){
  //     var bodyjson = {};
  //     try {
  //       if(body){
  //         bodyjson = JSON.parse(body);
  //       }
        
  //     } catch (error) {
  //       console.error(error);
  //       console.log(body);
  //     }
  //     if(bodyjson["translation"] && bodyjson["translation"].length){
  //       let arr = bodyjson["translation"][0].split("\n");
  //       callBackFunc(arr.join(","),item,path,word);
  //     }
  // })
}
// Translator.prototype.wordItems = [];
// Translator.prototype.requestItemTrans = function (word){
//   let youdaoHost = 'http://openapi.youdao.com/api';
//   // 在get请求中，中文需要进行uri编码
//   let encodeURIWord = encodeURI(word);
//   let salt = this.getRandomN(1000);
//   let sign = this.md5(this.config.appKey + word + salt + this.config.secretKey);
//   let paramsJson = {
//     q: encodeURIWord,
//     from: this.config.from,
//     to: this.config.to,
//     appKey: this.config.appKey,
//     salt: salt,
//     sign: sign
//   }
//   let self = this;
//   request({ 
//     url: youdaoHost,
//     method:'post',
//     headers:{
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     form:paramsJson
//   },function(error,response,body){
//     var bodyjson = {};
//     try {
//       if(body){
//         bodyjson = JSON.parse(body);
//       }
      
//     } catch (error) {
//       console.error(error);
//       console.log(body);
//     }
    
//     console.log("----------翻译进度(递减)："+self.wordArr.length);
//     if(bodyjson["translation"] && bodyjson["translation"].length){
//       self.wordItems.push(bodyjson["translation"][0]);
//     }
//     if(!self.wordArr.length){
//       self.callBackFunc(self.wordItems.join(","),self.itemIndex);
//     }else{
//       self.requestItemTrans(self.wordArr.shift());
//     }
//   });
// }
module.exports = Translator;