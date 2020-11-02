var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  console.log("收到请求了，请求路径是", req.url);
  console.log("收到请求了，请求ip和端口是", req.socket.remoteAddress,req.socket.remotePort);
  res.end("hello node.js");
});

server.listen(3000, function () {
  console.log("服务器启动可以访问了");
});
