# Node.js

## Node.js 介绍

- 为什么要学习 Node.js

- Node.js 是什么
  - Node.js is a JavaScript runtime built on Chrome's V8 javaScript engine.
    - Node.js 不是一门语言
    - Node.js 不是库、不是框架
    - Node.js 是一个 javaScript 运行时环境
    - 简单点来讲就是 Node.js 可以解析和执行 JavaScript 代码
    - 以前只有浏览器可以解析执行 javaScript 代码
    - 也就是说现在的 javaScript 可以完全脱离浏览器运行，一切都归功于 Node.js
  - 浏览器中的 JavaScript
    - EcmaScript
      - 基本的语法
      - if
- Node.js 能做什么
  - web 服务器后台
  - 命令行工具
    - npm(node)
    - git(c 语言)
    - hexo(node)
    - ...
  - 对于前端开发工程师来讲，接触 node 最多的是它的命令行工具
    - 自己写的很少，主要是使用别人第三方的
    - webpack
    - gulp
    - npm
  - - http 服务器
    - 等处理...
  - Node.js uses an event-driven,non-blocking I/O model that makes it lightweght and dfficient.
    - event-driven 事件驱动
    - non-blocking I/O model 非阻塞 IO 模型(异步)
    - lightweight and efficient 轻量和高效
  - Node.js'package ecosystem,npm,is the largest ecosystem of open source libraries in the world.
    - npm 是世界上最大的开源生态库
    - 绝大多数 javaScript 相关的包都存放在了 npm 上，这样做的目的时为了让开发人员更方便的去下载使用
    - npm install jquery
- 预备知识
  - HTML
  - CSS
  - JavaScript
  - 简单的命令行操作
  - 具有服务端开发经验更佳
- 一些资源
  - <<深入浅出 Node.js>>
  - <<Node.js 权威指南>>
  - javaScript 标准参考教程(alpha):http://javascript.runyifeng.com/
  - Node 入门：http://www.nodebeginner.org/index-zh-cn.html
  - 官方 API 文档：http://nodejs.org/dist/latest-v6.x/docs/api/
  - 中文文档：http://www.nodeclass.com/api/node.html
  - CNODE 社区：http://condejs.org
  - CNODE-新手入门:http://cnodejs.org/getstart
- 这门课你能学到什么

  - B/S 编程模型

    - Browser - Server
    - back-end
    - 任何服务器端技术这种 BS 编程模型都是一样，和语言无关
    - Node 只是作为我们我们学习 BS 编程模型的一个工具而已

    * 模块化编程
    * Node 常用 API
    * 异步编程
      - 回调函数
      - Promise
      - async
      - generator
    * Express 开发框架
    * EcmaScript 6
      - 只是一个新的语法而已
    * ...

## 起步

- 安装 Node 环境

  - 查看当前 Node 环境的版本号
- Hello Word
  - 解析执行 JavaScript
  - 文件读写
  - http
- Node 中的 JavaScript
  - EcmaScript
  - 核心模块
  - 用户自定义模块
  - 第三方模块
- web 服务器开发
  - ip 地址和端口号
    - ip 地址用来定位计算机
    - 端口号用来定位具体的应用程序
    - 一切需要联网通信的软件都会占用一个端口号
    - 端口号范围从 0-65536 之间
    - 在计算机中有一些默认端口号，最好不要去使用
      - 例如 http 服务的 80
    - 我们在开发过程中使用一些简单好记的就可以了，例如 3000、5000 等没什么含义。
    - 可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以
    - 说白了，在一台计算机中，同一个端口号同一时间只能被一个程序占用
  - Content-Type
    - http://tool.oschina.net/
- 留言本
- Node 中的模块系统
  使用 Node 编写应用程序主要就是在使用

  - EcmaScript 语言
    - 和浏览器不一样，在 Node 中没有 BOM 和 DOM
  - 核心模块
    - 文件操作的 fs
    - http 服务的 http
    - url 路径操作模块
    - path 路径处理模块
    - os 操作系统信息
  - 第三方模块
    - art-template
    - 必须通过 npm 来下载才可以使用
  - 咱们自己写的模块
    - 自己创建的文件
  - 优先从缓存加载
  - 什么是模块化

  * 文件作用域
  * 通信规则
    - 加载
    - 导出

  - CommonJS 模块规范
    在 Node 中的 javascript 还有一个重要的概念模块系统

  * 模块作用域
  * 使用 require 方法来加载模块
  * 使用 exports 接口对象用来导出模块中的成员

  - 加载 require
    语法：

  ```javascript
  var 自定义变量名称 = require("模块");
  ```

  两个作用：
  _ 执行被加载模块中的代码
  _ 得到被加载模块中的 `exports` 导出接口对象

  - 导出 exports

    - Node 中是模块作用域，默认文件加中所有的成员只在当前模块有效
    - 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到`exports`接口对象中就可以了
      导出多个成员(必须在对象中)：

    ```javascript
    exports.a=123
    exports.b='hello
    exports.c=function(){
      console.log('ccc')
    }
    exports.d={
      foo:'bar'
    }
    ```

    

    导出单个成员(拿到的就是:函数、字符串)：
    ``` javascript
    modele.exports='hello'
    ```
    以下情况会覆盖：
    ``` javascript
     module.exports='hello'
    //以这个为准，后者会覆盖前者
     module.exports=function(x,y){
       return x+y
     }
    ```
    也可以这样来导出多个成员：
    ```javascript
    module.exports={
      add:function(){
        return x+y
      },
      str:'hello'
    }
    ```
    原理解析
    exports 和 `module.exports` 的一个引用

    ```javascript
    console.log(exports===module.exports) // =>true
    exports.foo='bar'
    //等价于
    module.exports.foo='bar'
    ```

- Express
- MongoDB

```

```
