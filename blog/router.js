var express = require("express");

var router = express.Router();

router.get("", function (req, res) {
  res.render("index.html");
});

router.get("/register", function (req, res) {
  res.render("register.html");
});

router.get("/login", function (req, res) {
  res.render("login.html");
});

router.post("/register", function (req, res) {
    //1.获取表单提交的数据
    //2.操作数据库
    //3.发送响应
  console.log(req.body)
});
module.exports = router;
