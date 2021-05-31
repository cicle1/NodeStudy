const fs = require("fs");
fs.readFile(
  "hello.txt",
  { flag: "r", encoding: "utf-8" },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      myEvent.emit("fileSuccess");
      //1数据库查看王海狗的所有信息
      //2拿王海狗和母猪比较
      //3给白猪一堆屎尿
    }
  }
);


let myEvent = {
  event: {
    //fileSuccess:[fn1,fn2,fn3]
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn);
    } else {
      this.event[eventName] = [];
      this.event[eventName].push(eventFn);
    }
  },
  emit: function (eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((itemFn) => {
        itemFn();
      });
    }
  },
};
myEvent.on("fileSuccess", function () {
  console.log("1数据库查看王海狗的所有信息");
});
myEvent.on("fileSuccess", function () {
  console.log("2拿王海狗和母猪比较");
});
myEvent.on("fileSuccess", function () {
  console.log("3给白猪一堆屎尿");
});
