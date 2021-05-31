const fs = require("fs");
function writefs(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path,
      content,
      { flag: "a", encoding: "utf-8" },
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(err)
          console.log("文件写入成功");
        }
      }
    );
  });
}

function readfs(path) {
  return new Promise((resolve, reject) => {
  fs.readFile(path, function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data)
      console.log(data.toString());
    }
  });
});
}

async function writeList() {
  await writefs("index.txt", "helloword1\n");
  await writefs("index2.txt", "王海固\n");
  await writefs("index1.txt", "垃圾\n");
}
//writeList();

async function readFileFun(){
  await readfs("lc.txt");
  await readfs("index.txt");
  await readfs("index1.txt");
  await readfs("index2.txt");
}
//readFileFun();
module.exports={
  writefs,
  readfs
}