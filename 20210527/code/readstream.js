const fs = require("fs");

//创建读取流，语法 fs.createReadStream(路径，[可选的配置项])

const rs = fs.createReadStream("uni.mp4", { flags: "r"});

const ws = fs.createWriteStream("uniapp.mp4", { flags: "w" });
console.log(rs);

//管道流简化所有操作
rs.pipe(ws)

// rs.on("open", function () {
//   console.log("读取的文件已经打开");
// });

// rs.on("close", function () {
//   console.log("读取流结束");
// });

// //每一批数据流入完成
// rs.on("data", function (chunk) {
//   console.log("单批数据流入：" + chunk.length);
//   console.log(chunk);
//   ws.write(chunk, () => {
//     console.log("单批输入流完成");
//   });
// });
