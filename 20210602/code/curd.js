const fs = require("fs");
function fsWrite(path, content) {
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
          //console.log("文件写入成功");
        }
      }
    );
  });
}

function fsRead(path) {
  return new Promise((resolve, reject) => {
  fs.readFile(path, function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data)
      //console.log(data.toString());
    }
  });
});
}

function fsDir(path){
  return new Promise((resolve,reject)=>{
    fs.mkdir(path,function(err){
      if(err){
        reject(err)
      }else{
        resolve("成功创建目录")
      }
    })
  })
}

module.exports={
  fsWrite,
  fsRead,
  fsDir
}