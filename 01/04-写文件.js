var fs = require("fs");
//第一个参数 文件路径
//第二个参数 文件内容
//第三个参数 回调函数

//  成功
//  文件写入成功
//  error是null
//  失败
//  文件写入失败
//  error就是错误对象
fs.writeFile("./你好.md", "大家好，给大家介绍下，我是nodejs", function (error) {
    if(error){
        console.log("文件写入失败");
    }else{
        console.log("文件写入成功");
    }
 
});
