//1.结合 fs 发送文件中的数据
//2.Content-Type
// http：//tool.oschina.net/commons
//  不同的资源对应的Content-Type 是不一样的
// 图片不需要指定编码
// 一般只为字符数据 才指定编码


var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", function (req, res) {
  var url = req.url;
  if (url === "/") {
    //肯定不这么干
    // res.end('<html lang="en"><head><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head> <body></body> </html>')

    //我们要发送的还是在文件中的内容
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败，请稍后重试");
      } else {
        //data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
        //res.end() 支持两种数据类型，一种是二进制 一种是字符串
        res.setHeader("Content-Type", "text/html,charset-utf-8");
        res.end(data);
      }
    });
  } else if (url === "/a") {
    fs.readFile("./th.jpg", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败，请稍后重试");
      } else {
        //data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
        //res.end() 支持两种数据类型，一种是二进制 一种是字符串
        //图片就不需要指定编码了，因为我们常说的编码一般指的是字符编码
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  }else if(url==='/xiaoming'){
      //url 统一资源定位符
      //一个url 最终其实是要对应到一个资源的
      fs.readFile("./th.jpg", function (err, data) {
        if (err) {
          res.setHeader("Content-Type", "text/plain;charset=utf-8");
          res.end("文件读取失败，请稍后重试");
        } else {
          //data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
          //res.end() 支持两种数据类型，一种是二进制 一种是字符串
          //图片就不需要指定编码了，因为我们常说的编码一般指的是字符编码
          res.setHeader("Content-Type", "image/jpeg");
          res.end(data);
        }
      });
  }
});

server.listen("80", function () {
  console.log("server run ...");
});
