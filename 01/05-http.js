//接下来我们要做一件用node很有成就感的事
//你可以使用node非常轻松的构建一个web服务器
//在node中专门提供了一个核心模块：http
//http这个模块的职责就是帮你创建编写服务器的

//1.加载http核心模块

var http = require("http");
//2使用 http.creatServer() 方法创建一个 web服务器
//返回一个Server 实例
var server = http.createServer();

//3.要服务器干嘛？
//提供服务：对数据的服务
//发请求
//接收请求
//处理请求
// 给个反馈
//注册request 请求事件
//当客户请求过来，就会自动触发服务器的request 请求事件 然后执行第二个参数：回调处理

server.on("request", function () {
  console.log("收到客户端请求");
});
//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/来进行访问')
})
