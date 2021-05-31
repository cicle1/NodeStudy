const path = require("path");
console.log(path);

const strPath =
  "https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/5ac40390-c1af-11eb-aec0-49e10fdeeaeb_0.png?v=1622425001";

//获取路径信息的扩展名
const info = path.extname(strPath);

console.log(info);

//获取当前执行目录的完整路径
let info1=path.resolve('sxt','qianduan','zhongji')
console.log(info1)

//获取当前执行目录的完整路径
console.log(__dirname)//获取当前执行文件的目录
let info2=path.join(__dirname,'sxt','qianduan','zhongji')
console.log(info2)

//获取当前的执行文件
console.log(__filename)

//获取扩展名
console.log(path.extname(__filename))

//解析路径 可以将路径信息直接解析出来，解析出 根路径，目录，扩展名，文件名称
console.log(path.parse(__filename))


