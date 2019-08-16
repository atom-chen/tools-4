### 实现方案
 
 1.将js文件转成base64字符串

 2.将base64字符串转成随机json key-value值

 3.通过zlib压缩

 4.将压缩后的二进制数据 转成指定位置的字符的 Unicode 编码存入到json中

### 需要了解的知识点

 ####1.模块导入导出
   
     为了更好组织、管理代码，nodejs引入了模块， 一个文件就是一个独立的模块，每个模块都有自己的独立作用域 - 模块作用域

   暴露模块API：
   	    
      模块对象---module:每个独立的模块中都有一个内置的对象；    
      module.exports : 通过该对象，我们可以把一个模块内容的数据对外提供访问接口	  
        
   加载模块	：    

      require(模块名)

#### 2.process

    process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。

    eg：
    process.arch:
        process.arch属性返回一个表示操作系统CPU架构的字符串，Node.js二进制文件是为这些架构编译的。 例如 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 或 'x64'。

    process.argv:
        process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数。 第一个元素是 process.execPath。 
        如果需要访问 argv[0] 的原始值，参阅 process.argv0。 第二个元素将是正在执行的 JavaScript 文件的路径。 
        其余元素将是任何其他命令行参数。

    ...其余方法可以查看api 

####3.fs模块
   
   主要作用：
   fs.readFile fs.writeFile 
   
   读取文件和 写出文件

####4.Bagpipe

    如果对文件系统进行大量并发调用，操作系统的文件描述符数量会瞬间用光，抛出如下，错误
    Error: EMFILE, too many open files

    bagpipe的应用，就是维护一个队列来控制并发。
    具体应用代码如下：
    var Bagpipe = require('bagpipe');
    var bagpipe = new Bagpipe(10);
    for(var i = 1; i < 10; i++){
    bagpipe.push(async,  function(){
    });
    }
    bagpipe.on('full', function(length){
    console.log('底层系统处理不能及时完成，队列堵塞，目前队列长度' + length);
    });

    其实在bagpipe中维护一个异步并发任务的队列，来使得最大的并发数也小于limit的数。

    源码解析  https://www.jianshu.com/p/8f52b708fd67

####5.zlib
    Zlib是一个压缩和解压模块 我们这里主要用到2个放法

    Zlib.Deflate 压缩  Zlib.Inflate解压缩

    更多详情  https://www.npmjs.com/package/zlibjs

####glob

    node的glob模块允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件.

    var glob = require("glob")

    // options 是可选的

    glob("**/*.js", options, function (er, files) {

        // files 是匹配到的文件的数组.
        // 如果 `nonull` 选项被设置为true, 而且没有找到任何文件,那么files就是glob规则本身,而不是空数组
        // er是当寻找的过程中遇的错误

    })

    详细介绍参数值   https://www.cnblogs.com/liulangmao/p/4552339.html

### Use

   npm run start ->将test目录下的js文件经上述过程处理成json文件

   npm run reset -> 还原处理过的json文件到js
  
   
  

    

