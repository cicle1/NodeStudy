const fs = require("fs");
const events = require("events");
const ee = new events.EventEmitter();
ee.on("helloSuccess", function () {
  console.log("1吃宵夜");
});
ee.on("helloSuccess", function () {
  console.log("2唱歌");
});
ee.on("helloSuccess", function () {
  console.log("3打王海狗");
});
ee.on("helloSuccess", function (data) {
  console.log("4打白耀猪");
  console.log(data)
});
// fs.readFile("hello.txt", { encoding: "utf-8" },function(err,data){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//     ee.emit('helloSuccess',data)
//   }
// });

function readfs(path){
  return new Promise((resolve,reject)=>{
    fs.readFile("hello.txt", { encoding: "utf-8" },function(err,data){
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    });
  })
}

// readfs("hello.txt").then(function(data){
//   ee.emit('helloSuccess',data)
// })

async function test(){
  let data =await readfs('hello.txt')
  ee.emit('helloSuccess',data)
}

test()