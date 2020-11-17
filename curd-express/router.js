/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 *   模块职责要单一,不要乱写
 *   我们划分模块的目的就是为了增强项目代码
 *   提升开发效率
 */

var fs = require("fs");
var Student = require("./students.js");

//Express 提供了一种更好的方式
//专门用来包装路由的
var express = require("express");

//1.创建一个路由容器
var router = express.Router();

//2.把路由挂载到 router 路由容器中

/**
 * 渲染学生列表页面
 */
router.get("/students", function (req, res) {
  //readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码格式解析
  //除了这样来转换之外，也可以通过 data.toString() 的方式
  // fs.readFile("./db.json", "utf8", function (err, data) {
  //   if (err) {
  //     return res.status(500).send("Server error");
  //   }
  //   //从文件中读取到的数据一定是字符串
  //   //所以这里一定要手动转成对象
  //   var students = JSON.parse(data).students;
  //   res.render("index.html", {
  //     fruits: ["苹果", "香蕉", "梨子"],
  //     students: students,
  //   });
  // });
  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render("index.html", {
      fruits: ["苹果", "香蕉", "梨子"],
      students: students,
    });
  });
});

/**
 * 渲染添加学生页面
 */
router.get("/students/new", function (req, res) {
  res.render("new.html");
});

/**
 * 处理添加学生
 */
router.post("/students/new", function (req, res) {
  //1.获取表单数据
  //2.处理
  //  将数据保存到 db.json 文件中用以持久化
  //3.发送响应
  //先读取出来，转成对象
  //然后往对象中push 数据
  // 然后把对象转为字符串
  // 然后把字符串写入文件
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.redirect("/students");
  });
});

/**
 * 渲染编辑学生页面
 */
router.get("/students/edit", function (req, res) {
  Student.findById(parseInt(req.query.id), function (err, data) {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render('edit.html',{
      student:data
    })
  });
});

/**
 * 处理编辑学生
 */
router.post("/students/edit", function (req, res) {
  //1.获取表单数据
  //  req.body
  //2.更新
  //  Student.updateById()
  //3.发送响应
  Student.updateById(req.body,function(err){
    if(err){
      return res.status(500).send("Server error");
    }
    res.redirect('/students')
  })
});

/**
 * 处理删除学生
 */
router.get("/students/delete", function (req, res) {
  Student.deleteById(req.query.id,function(err){
    if(err){
      return res.status(500).send("Server error");
    }
    res.redirect('/students')
  })
});

//3.把 router 导出
module.exports = router;

//这样也不方便
// module.exports = function (app) {
//   app.get("/students", function (req, res) {
//     //readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码格式解析
//     //除了这样来转换之外，也可以通过 data.toString() 的方式
//     fs.readFile("./db.json", "utf8", function (err, data) {
//       if (err) {
//         return res.status(500).send("Server error");
//       }
//       //从文件中读取到的数据一定是字符串
//       //所以这里一定要手动转成对象
//       var students = JSON.parse(data).students;
//       res.render("index.html", {
//         fruits: ["苹果", "香蕉", "梨子"],
//         students: students,
//       });
//     });
//   });
// };
