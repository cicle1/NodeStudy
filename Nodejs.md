# Node.js

  ## Node.js 介绍

   - 为什么要学习 Node.js

   - Node.js 是什么
     + Node.js is a JavaScript runtime built on Chrome's V8 javaScript engine.
        * Node.js不是一门语言
        * Node.js不是库、不是框架
        * Node.js是一个javaScript 运行时环境
        * 简单点来讲就是Node.js可以解析和执行JavaScript代码
        * 以前只有浏览器可以解析执行javaScript代码
        * 也就是说现在的javaScript可以完全脱离浏览器运行，一切都归功于Node.js
     + 浏览器中的JavaScript
        * EcmaScript
          - 基本的语法
          - if
   - Node.js 能做什么
     + web服务器后台
     + 命令行工具
       * npm(node)
       * git(c语言)
       * hexo(node)
       * ...
     + 对于前端开发工程师来讲，接触node最多的是它的命令行工具
       * 自己写的很少，主要是使用别人第三方的
       * webpack
       * gulp
       * npm
     + 
       * http服务器
       * 等处理...
     + Node.js uses an event-driven,non-blocking I/O model that makes it lightweght and dfficient.
       * event-driven 事件驱动
       * non-blocking I/O model 非阻塞IO模型(异步)
       * lightweight and efficient 轻量和高效
     + Node.js'package ecosystem,npm,is the largest ecosystem of open source libraries in the world.
       * npm 是世界上最大的开源生态库
       * 绝大多数javaScript 相关的包都存放在了npm上，这样做的目的时为了让开发人员更方便的去下载使用
       * npm install jquery
   - 预备知识
     + HTML
     + CSS
     + JavaScript
     + 简单的命令行操作
     + 具有服务端开发经验更佳
   - 一些资源
     + <<深入浅出Node.js>>
     + <<Node.js权威指南>>
     + javaScript 标准参考教程(alpha):http://javascript.runyifeng.com/
     + Node入门：http://www.nodebeginner.org/index-zh-cn.html
     + 官方API文档：http://nodejs.org/dist/latest-v6.x/docs/api/
     + 中文文档：http://www.nodeclass.com/api/node.html
     + CNODE社区：http://condejs.org
     + CNODE-新手入门:http://cnodejs.org/getstart
   - 这门课你能学到什么

     + B/S编程模型
       * Browser - Server
       * back-end
       * 任何服务器端技术这种 BS编程模型都是一样，和语言无关
       * Node 只是作为我们我们学习 BS 编程模型的一个工具而已
    + 模块化编程
    + Node常用API
    + 异步编程
      * 回调函数
      * Promise
      * async
      * generator
    + Express开发框架
    + EcmaScript 6
      * 只是一个新的语法而已
    + ...

## 起步

   - 安装 Node 环境
      + 查看当前Node环境的版本号
   - Hello Word
      + 解析执行 JavaScript
      + 文件读写
      + http
   - Node 中的 JavaScript
      + EcmaScript 
      + 核心模块
      + 用户自定义模块
      + 第三方模块
   - web服务器开发
      + ip地址和端口号
        * ip地址用来定位计算机
        * 端口号用来定位具体的应用程序
        * 一切需要联网通信的软件都会占用一个端口号
        * 端口号范围从0-65536之间
        * 在计算机中有一些默认端口号，最好不要去使用
          - 例如http服务的80
        * 我们在开发过程中使用一些简单好记的就可以了，例如3000、5000等没什么含义。
        * 可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以
        * 说白了，在一台计算机中，同一个端口号同一时间只能被一个程序占用
      + Content-Type
        * http://tool.oschina.net/
   - 留言本
   - Node 中的模块系统
