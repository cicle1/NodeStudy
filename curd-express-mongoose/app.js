/**
 * app.js 入口模块
 * 职责：
 *    创建服务
 *    做一些服务相关配置
 *      模板引擎
 *      body-parse 解析表单 post 请求体
 *      提供静态服务
 *      挂载路由
 *      监听端口启动服务
 */

var express = require("express");
var router = require("./router");
var bodyParser = require("body-parser");

var app = express();

//配置模板引擎和 body-parse 一定要在 app.use(router) 挂载路由之前
// parse application/json/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/node_modules/", express.static("./node_modules/"));
app.use("/public/", express.static("./public/"));

//配置模板引擎
app.engine("html", require("express-art-template"));

//把路由容器挂载到app服务器中
app.use(router);

app.listen(3000, function () {
  console.log("running 3000...");
});


