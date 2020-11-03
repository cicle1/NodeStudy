var url = require("url");

var obj = url.parse(
  "/pinglun?name=十三点v六年&message=辅导老师看就看"
,true);

console.log(obj)
console.log(obj.query)
