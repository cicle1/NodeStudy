var http = require("http");

var fs = require("fs");

//1.创建server
var server = http.createServer();

//2.监听server 的request 请求事件 设置请求处理函数
// 请求
// 处理
// 响应
// 一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应
//没有请求就没有响应

//咱们以前用过的Apache 服务器软件，这个服务器默认有一个www 目录，所有存放在www 目录中的资源都可以通过
//127.0.0.1:80/a.text
//127.0.0.1:80/index.html
//127.0.0.1:80/apple/login.html

var wwwDir = "C:/Users/admin/Desktop/www";

server.on("request", function (req, res) {
  var url = req.url;
  if (url === "/") {
    //res.end("hello word");
    fs.readFile("", function (err, data) {
      if (err) {
        //return 有两个作用
        //1.方法返回值
        //2.阻止代码继续向后执行
        return res.end("404 Not Found");
      }
      res.end(data);
    });
  } else if (url === "/a.txt") {
    fs.readFile(wwwDir + "/a.txt", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      res.end(data);
    });
  } else if (url === "/index.html") {
    fs.readFile(wwwDir + "/index.html", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      res.end(data);
    });
  } else if (url === "/apple/login.html") {
    fs.readFile(wwwDir + "/apple/login.html", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      res.end(data);
    });
  } else {
    res.end("404 Not Found");
  }
});

//绑定端口号启动服务
server.listen("3000", function () {
  console.log("running...");
});
