//require是一个方法
//它的作用就是用来加载模块的
//在Node中，模块有三种：
//     具名的核心模块 例如fs、http
//     用户自己编写的模块
//       相对路径必须加./
//       可以省略后缀名
//       相对路径中的 ./不能省略，否则报错
//   在 Node 中，没有全局的作用域，只有模块作用域
//  外部访问不到内部
// 内部也访问不到外部

//require方法有两个作用
//   1.加载文件模块并执行里面的代码
//   2.拿到被加载文件模块导出的接口对象

//  在每个文件模块中都提供了一个对象：exports
//   exports 默认是一个空对象
//   你要做的就是把所有需要被外部访问的成
var bExportd = require("./b");

var fs=require('fs')

console.log(bExportd.foo);

console.log(bExportd.add(10, 30));

console.log(bExportd.age)



fs.readFile('./a.js',function(err,data){
    if(err){
        console.log('读取文件失败')
    }else{
        console.log('读取文件成功')
    }
})

var foo='aaa'

console.log('a start')


function add(x,y){
    return x+y
}

require('./b.js')

console.log('a end')

console.log('foo的值是：',foo)