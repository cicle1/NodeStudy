const fs = require("fs");
const ws = fs.createWriteStream("hello.txt", { flags: "a", encoding: "utf-8" });//flags a表示追加内容 w表示覆盖
console.log(ws);
//监听文件打开事件
ws.on("open", function () {
  console.log("文件打开");
});

//监听准备事件
ws.on("ready", function () {
  console.log("文件写入已准备状态");
});

//监听文件关闭
ws.on('close',function(){
  console.log("文件写入完成，关闭")
})

//文件流写入
ws.write("helloword!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入1完成");
  }
});
ws.write("helloword2!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入2完成");
  }
});
ws.write("helloword3!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入3完成");
  }
});
ws.write("helloword4!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入4完成");
  }
});

//文件写入完成
ws.end(function () {
  console.log("文件写入关闭");
});
