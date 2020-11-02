//art-template
//art-template 不仅可以在浏览器使用，也可以在node中使用

//安装：
//     npm install art-template
//     该命令在哪执行就会把包下载到哪里，默认会下载到 node_modules 目录中
//     node_modules 不要改，也不支持改

//在 Node 中使用 art-template 模板引擎
// 模板中引擎最早诞生于服务器端，后来才发展到了前端

//1.安装  npm install art-template
//2.在需要使用的文件模块中 加载 art-template
//   只需要使用 require 方法加载就可以了, require('art-template')
//   参数中的art-template 就是你下载的包的名字
//   也就是说你的 install 的名字是神恶魔，则你 require 中的名字就是什么
//3.查文档，使用模板引擎的API

var template = require("art-template");

//这里不是浏览器
//template('script 标签 id',{对象})

var fs = require("fs");

fs.readFile("./tpl.html", function (err, data) {
  if (err) {
    return console.log("读取文件失败了");
  }
  //默认读取到的 data 是二进制数据
  //而模板引擎的 render 方法需要接收的是字符串
  //所以我们在这里需要把 data 二进制数据转为 字符串 才可以给模板引擎使用

  var ret = template.render(data.toString(), {
    name: "Jack",
    age: 18,
    province: "北京市",
    hobbies: ["写代码", "唱歌", "打游戏"],
  });
  console.log(ret);
});
