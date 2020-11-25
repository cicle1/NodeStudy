var fs = require("fs");
const { resolve } = require("path");

//console.log(1)
//在 EcmaScript 6 中新增了一个 API promise
//Promise 是一个构造函数

//创建 Promise 容器
//1.给别人一个承诺 I promise you.
//  Promise 容器一旦创建，就开始执行里面的代码

var p1= new Promise(function(resolve,reject){
   // console.log(2)
    fs.readFile('./data/a.txt','utf8',function(err,data){
        if(err){
            //失败了 承诺容器中的任务失败了
           // console.log(err)
           //把容器的 Pending 状态变为 Rejected

           //调用reject 就相当于调用了 then 方法的第二个参数函数
           reject(err)
        }else{
            //console.log(3)
            //承诺容器中的任务成功了
            //console.log(data)
            //把容器的 Pending 状态改为成功 Resolved
            //也会是说这里调用的 resolve 方法实际上就是 then 方法 传递的那个 function
            resolve(data)
        }
    })
})
//console.log(4)

//p1 就是那个承诺
//当 p1 成功了 然后（then) 做指定的操作
//then 的方法接收的 function 就是容器中的 resolve 函数
var p2= new Promise(function(resolve,reject){
    fs.readFile('./data/b.txt','utf8',function(err,data){
        if(err){
           reject(err)
        }else{
            resolve(data)
        }
    })
})
var p3= new Promise(function(resolve,reject){
    fs.readFile('./data/c.txt','utf8',function(err,data){
        if(err){
           reject(err)
        }else{
            resolve(data)
        }
    })
})
p1.then(function(data){
    console.log(data)
    //当p1读取成功的时候
    //当前函数中 return 的结果就可以在后面的 then 中function 接收到
    //当你 return 123 后面接收到的就是 123
    //  return hello 后面后面接收到就是 hello
    //没有return 后面就是 undefind
    //真正有用的是 return 一个promise 对象
    //当 return 一个 Promise 对象的时候，后续的 then 中的 方法的第一个参数会作为 p2 resolve
    
    
    return p2
}).then(function(data){
    console.log(data)
    return p3
}).then(function(data){
    console.log(data)
})


