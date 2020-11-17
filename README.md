# Node.js 第一天

## 上午总结

- Node.js是什么
 + JavaScript运行时
 + 既不是语言，也不是框架，它是一个平台
- Node.js中的JavaScript
 + 没有BOM、DOm
 + EcmaScript 基本的 JavaScript 语言部分
 + 在Node 中为 JavaScript 提供了一些服务器级别的API
   * 文件操作的能力
   * http 服务的能力
 + markdown 标记语言
 + `#` 就是标题
 + `-`、`*` 就是列表
 + `**加粗内容**`
 + `GFM`
 + <<编写可维护额 JavaScript>>


## 总结

- Node中的JavaScript
  + EcmaScript
    * 变量
    * 方法
    * 数据类型
    * 内置对象
    * Array
    * Object
    * Date
    * Math
  + 模块系统
    * 在Node 中没有全局作用域的概念
    * 在 Node中，只能通过require方法来加载执行多个JavaScript 脚本文件
    * require 加载只能是执行其中的代码，文件与文件之间由于是模块作用域，所以不会有污染的问题
      - 模块完全是封闭的
      - 外部无法访问内部
      - 内部也无法访问外部
    * 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
    * 但是某些情况下，模块与模块之间是需要进行通信的
    * 在每个模块中都提供了一个对象：`exports`
    * 该对象默认是一个空对象
    * 你要做的就是把需要被外部访问使用的成员手动挂载到 `exports` 接口对象中
    * 然后谁来`require`这个模块，谁就可以得到模块内部的`exports`接口对象
  + 核心模块
   * 核心模块是由Node提供的一个个具名模块，它们都有自己特殊的标识，例如
     - fs文件操作模块
     - http 网络服务器构建模块
     - os 操作系统信息模块
     - path路径处理模块
     - ...
   * 所有核心模块在使用的时候都必须手动的先使用`require` 方法来加载，然后才可以使用例如
    - `var fs=require('fs')`
- http
  + require
  + 端口号
  + ip地址定位计算机
  + 端口号定位具体的应用程序
  + Content-Type
    * 服务器最好把每次响应的数据是什么内容类型都告诉客户端，而且要正确的告诉
    * 不同的资源对应的Content-Type 是不一样的，具体参照: http://tool.oschina.net/commons
    * 对于文本类型的数据，最好都加上编码，目的是为了防止中文解析乱码问题
  + 通过网络发送文件
    * 发起的并不是文件，本质上来讲发送文件的内容
    * 当前浏览器收到服务器响应内容之后，就会根据你的 Content-Type 进行对应的解析处理


## 代码风格
  + 为了约定大家的代码风格，所以在社区中诞生了一些比较规范的代码风格规范:
    - JavaScript Standard Style
    - Airbnb TavaScript Style
  + 当你采用了无分号的代码风格的时候，只需要注意以下情况就不会有上面的问题了:
    - 当一行代码是以( [ ` 开头的时候，则在前面加分号以避免一些语法解析错误
    - 如: ;(function(){ console.log('hello)})()
## 服务端渲染
  + 说白了就是在服务端使用模板引擎
  + 模板引擎最早诞生于服务端，后来才发展到了前端
## 服务端渲染和客户端渲染的区别
  + 客户端渲染不利于 SEO 搜索引擎优化
  + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
  + 而是两者结合来做的
  + 例如京东的商品列表就采用的是服务端渲染，目的是为了 SEO 搜索引擎优化
  + 而他的商品评论列表为了用户体验， 而且也不需要 SEO 优化，所以采用的是客户端渲染

# Node.js 第三天课堂笔记

## 知识点

- 模块系统
  + 核心模块
  + 第三方模块
  + 自己写的模块
  + 加载规则及加载机制
  + 循环加载
- npm
- package.json
- Express
  + 第三方 web 开发框架
  + 高度封装了 http 模块
  + 更加专注于业务，而非底层细节
  + 知其所以然
- 增删改查
 + 使用文件来保存数据 (锻炼异步编码)
- MongoDB
 + (所有方法都封装好了)
- 学习书籍
 + 《javascript 高级编程》 第三版 《javascript 语言精粹》

- 网站开发模型
 + 黑盒子、哑巴
 + 写代码让他变的更加智能
 + 按照你设计好的套路供用户使用

- 在 Node 中使用 art-template 模板引擎
 + 安装
 + 加载
 + template.render()
- 客户端渲染和服务端渲染的区别
 + 最少两次请求，发起ajax 在客户端使用模板引擎渲染
 + 客户端拿到的就是服务器端已经渲染好的
- 处理留言本案例首页数据渲染展示
- 处理留言本案例发表留言功能
 + 路径
 + 设计好的请求路径
 + php $GET 直接或查询字符串数据
 + Node 中需要我们自己动手来解析
  * url.parse()
 
 + /pinglun?name=jack&message=hello
 + splict("?")
 + name=jack&message=hello
 + splict("&")
 + name=jack  message=hello
 + forEach()
 + name=jack.splict('=')
 + 0 key
 + 1 value
- 掌握如何让解析请求路径中的查询字符串
 + url.parse()
- 如何在 Node 中实现服务器重定向
 + header('location')
  * 301 永久重定向 浏览器会记住
   - a.com b.com
   - a 浏览器不会请求a了
   - 直接跳转b
  * 302 临时重定向 浏览器不记忆
   - a.com b.com
   - a.com 还会请求 a
   - a 告诉浏览器你往b
- Node 中的 Console (REPL) 使用 

# Node.js 第三天
 
 ## 上午总结

- jQuery 的 each 和原生的 JavaScript 方法 forEach
  + EcmaScript 5提供的
    * 不兼容 IE 8
  + jQuery 的each 由 jQuery 这个第三方库提供
    * jQuery 2 以下的版本是兼容 IE 8 的
    * 它的 each 方法主要用来遍历 jQuery 实例对象 (为数组)
    * 同时它也可以作为低版本浏览器中 forEach 替代品
    * jQuery 的实例对象不能使用 forEach 方法，如果想要使用必须转为数组才可以使用
    * `[].slice.call(jQuery实例对象)`
    ```javascript
    Array.prototype.mySclice=function(){
      var start=0
      var end=this.length
      if(arguments.length===1){
        start=arguments[0]
      }else if(arguments.length==2){
        start=arguments[0]
        end=arguments[1]
      }
      var tmp=[]
      for(var i=start;i<end;i++){
        //fakeArr[0]
        //fakeArr[1]
        //fakeArr[2]
        tmp.push(this[i])
      }
      return tmp
    }
    var fakeArr={
      0:'abc',
      1:'efg',
      2:'kk',
      length:3
    }
    //所以你就得到了真正的数组
    [].mySlice.call(fakeArr)
    ```
- 模块中导出多个成员和导出单个成员
  - exports 和 module.exports 的区别
    + 每个模块中都有一个 module 对象
    + module 对象中有一个exports 对象
    + 我们可以把需要导出的成员都挂载到 module.exports 接口对象中
    + 也就是：`module.exports.xxx=xxx`
    + 但是每次都 `module.exports.xxx=xxx`很麻烦，点儿的太多了
    + 所以 Node 为了你方便，同时在每一个模块中提供了一个成员叫： `exports`
    + `exports===module.exports` 结果为true
    + 所以对于： `module.exports.xxx=xxx`的方式，完全可以:`exports.xxx=xxx`
    + 当一个模块需要导出单个成员的时候，这个时候必须使用： `module.exports=xxx`的方式
    + 不要使用`exports=xxx`不管用
    + 因为每个模块最终向外`return`的是`module.exports`
    + 而`exports`只是`module.exports`的一个引用
    + 所以即便你为`exports=xxx`重新赋值，也不会影响`module.exports`
    + 但是有一种赋值方式比较特殊：`exports=module.exports` 这个用来重新建立引用关系的
- 301 和 302 状态码区别
- exports 和 module.exports 的区别
  ## 下午总结
  - jquery 的 each 和 原生的 JavaScript 方法 forEach
  - 301 和 302 的区别
  - 模块中导出单个成员和多个成员的方式
  - module.exports 和 exports 的区别
  - require 方法加载规则
    + 优先从缓存加载
    + 核心模块
    + 路径形式的模块
    + 第三方模块
      * node_modules
  - package.json 包描述文件
    + dependencies 选项的作用
  - npm 常用命令
  - Express 基本使用
  - 使用 Express 把之前的留言本案例自己动手改造下

  # Node.js 第4天课堂笔记’

  ## 知识点

  - Express
  - 基于文件做一套 CRUD 增删查改

 # 第五天反馈
  - submit 格式化插件 HTML-CSS-JS Prettify
  - 模块化
    * PHP 中直接 `require` 、`include` 因为当初设计时就加入了这个功能
    * PHP 这门语言天生就支持
    * 模块作用域
    * 可以使用 API 来进行文件与文件之间的依赖加载
    * 在 Node 这个环境对 JavaScript 进行了特殊的模块化支持 CommonJs
    * JavaScript 天生不支持模块化
      * require
      * exports
      * Node.js 才有的
  - 在浏览器中也可以像在 Node 中的模块一样来编程
    * `script` 标签来引用加载，而且你还必须考虑加载的顺序问题
    * require.js 第三方库 AMD
    * sea.js 第三方库     CMD
  - 无论是 CommonJs、AMD、CMD、UMD、EcmaScript 6 Modeules 官方规范
    * 都是为了解决 JavaScript 的模块化问题
    * CommonJs、AMD、CMD 都是民间搞出来的
    * EcmaScript 是官方定义
    * 官方看民间在乱搞，开发人员为了在不同的环境使用不同的 JavaScript 模块化解决方案
    * 所以 EcmaScript 在2015年发布了EcmaScript 2016 官方标准
    * 其中就包含了官方对 JavaScript 模块化的支持
    * 也就是说语言天生就支持了
    * 但是虽然标准已经发布了，但是很多 JavaScript 运行环境还不支持
    * Node 也是在 8.5 版本之后才对 EcmaScript 6 module 进行了支持
    * 使用新技术就是为了提高效率，增加可维护性
  - var router=require('./router) 这一步不是加载router.js并执行该文件吗为什么还要执行 app.use(router)
    * 这里涉及到一个中间件的概念
    * app.use 不仅仅是用来处理静态资源的
    * 还可以做很多工作
    * 配置 body-parse 
    * 这叫中间件，其中有一套规则
    
  
