//require 方法有两个作用：

var foo = "bbb";

exports.foo = "hello";

exports.add = function (x, y) {
  return x + y;
};
exports.readFilr = function (path, callback) {
  console.log("文件路径：", path);
};

function add(x, y) {
  return x - y;
}
