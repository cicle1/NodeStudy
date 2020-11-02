//例如：fs.readFile 就是用来读取文件的

//1.使用require方法加载fs核心模块
var fs = require("fs");
//2.读取文件
//  第一个参数就是要读取的文件路径
//  第二个参数就是一个回调函数
//  error
//    如果读取失败，error就是错误对象
//    如果读取成功，error 就是null
//  data
//    如果读取成功，data就是读取到的数据
//    如果读取失败，error就是错误对象

fs.readFile("hello.html", function (error, data) {
  //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73>
  //文件中存储的是二进制数据 0 1
  //这里看不到0 1是二进制转为16进制了
  //无论是二进制还是16进制认类都不认识
  //所以通过 toString 方法把其转为我们认识的字符
  //console.log(data)
  //console.log(data.toString())
  if (error) {
    console.log("读取文件失败");
  } else {
    console.log(data.toString());
  }
});
