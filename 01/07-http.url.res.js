var http = require("http");

//1.创建server
var server = http.createServer();

//监听 request 请求事件，设置请求处理函数
server.on("request", function (req, res) {
  /* console.log("收到请求了，请求路径是" + req.url);
  res.write('hello,黑熊')
  res.write('hello,白猪')
  res.end() */

  //上面的方式比较麻烦，推荐使用简单的方式，直接end的同时
  // res.end("baishu");
  res.write([
    { name: "黑", age: 18 },
    { name: "白", age: 19 },
    { name: "黄", age: 20 },
    { name: "红", age: 16 },
  ]);
  //响应内容只能是二进制数据或者字符串

  res.end();
});

//3.绑定端口号，启动服务
server.listen(80, function () {
  console.log("服务器启动了，可以访问了");
});
