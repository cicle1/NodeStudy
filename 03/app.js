//0.安装
//1.引包
var express=require('express')


//2.创建你的服务器应用程序
//   也就是原来的 http.createServer
var app=express()

//当服务器收到get请求 / 的时候，执行包处理函数
app.get('/',function(req,res){
    res.send("hello express!")
})

app.listen(3000,function(){
    console.log('app isrunning at port 3000')
})