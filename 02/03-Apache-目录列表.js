var http = require("http");

var fs = require("fs");

var server = http.createServer();

var wwwDir = "C:/Users/admin/Desktop/www";

server.on("request", function (req, res) {
  var url = req.url;
  fs.readFile("C:/Users/admin/Desktop/node/02/template.html", function (
    err,
    data
  ) {
    if (err) {
      return res.end("404 Not Found");
    }
    //1.如何得到 wwwDir 目录列表中的文件名和目录名
    // fs.readdir
    //2.如何将得到的文件名和目录名替换到 template.html 中
    // 模板引擎： 2.1 在template.html中需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的)
    //   2.2 根据files 生成需要的HTML 内容
    //只要你做了这两件事那这个问题就解决了
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end("Can not find www dir");
      }
      var content = "";
      files.forEach(function (item) {
        //在EcmaScript6的`字符串中，可以使用 ${} 来引用变量
        content += `
        <tr data-value="apple"><a class="icon dir" href="/C:/Users/admin/Desktop/www/apple"></a>
        <td>${item}</td>
        <td class="detailsColumn" data-value="0"></td>
        <td class="detailsColumn" data-value="1509589967">2020/10/30 下午15:06:50</td>
        </tr>
         `;
      });
      //2.3替换
      data = data.toString();
      //普通的字符串解析替换，浏览器看到的结果就不一样了
      data = data.replace("^_^", content);

      //3.发送解析替换过后的响应
      res.end(data);
    });
  });
});

server.listen("3000", function () {
  console.log("running...");
});
