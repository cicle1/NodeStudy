const readline = require("readline");
const {writefs,readfs} = require("../../20210525/code/curd");

var r1 = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});
//设置r1，提问事件
//r1.question("今晚吃啥？",function(answer){})

function myQuestion(title) {
  return new Promise(function (resolve, reject) {
    r1.question(title,function(answer){
      resolve(answer)
    })
  });
}

async function createPackage() {
  let name = await myQuestion("您的包名叫什么？");
  let description = await myQuestion("您的包描述？");
  let entry = await myQuestion("您的入口文件");
  let author = await myQuestion("您的名称？");
  const content = `
"name": "${name}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "${entry}",
  "scripts": {
    "test": "echo /\"Error: no test specified/\" && exit 1"
  },
  "keywords": [],
  "author": "${author}",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
`;
  await writefs("package.json", content);
  //最终写完内容 关闭输入进程
  r1.close();
}
createPackage();

//close事件监听
r1.on("close", function () {
  //结束程序
  process.exit(0);
});
