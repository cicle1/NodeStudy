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

    ```javascript
    modele.exports = "hello";
    ```

    以下情况会覆盖：

    ```javascript
    module.exports = "hello";
    //以这个为准，后者会覆盖前者
    module.exports = function (x, y) {
      return x + y;
    };
    ```

    也可以这样来导出多个成员：

    ```javascript
    module.exports = {
      add: function () {
        return x + y;
      },
      str: "hello",
    };
    ```

    原理解析
    exports 和 `module.exports` 的一个引用

    ```javascript
    console.log(exports === module.exports); // =>true
    exports.foo = "bar";
    //等价于
    module.exports.foo = "bar";
    ```

    ```javascript
    //如果是非路径模块标识
    //路径形式的模块
    //./
    //../
    // /xxx/几乎不用
    // da:/a/foo.js 几乎不用
    // 首位的 / 在这里表示的是当前文件的模块所属磁盘根路径
    //js 后缀名可以省略
    //require('foo.js')

    //核心模块的本质也是文件
    // 核心模块已经被编译到二进制文件中了，我们只需要按照名字来加载就可以了
    //require('fs')
    //require('http)

    //第三方模块
    //凡是第三方模块都必须通过 npm 来下载
    //使用的时候就可以通过 require ('包名') 的方式来进行加载才可以使用
    //不可能有任何一个第三方包和核心模块名字一样的
    //既不是核心模块，也不是路径形式的模块
    // 先找到当前文件所处目录中的 node_modules 目录
    // node_mpdules/art-template
    // node_modules/art-template/package.json 文件
    // node_modules/art-template/package.json 文件中的main 属性
    // var template=require('art-template')

    //注意：我们一个项目有且只有一个 node_modules,放在项目根目录中，这样的话项目中所有的子目录都可以访问到
    //不会出现有多个 node_modules
    // 模块查找机制
    //  优先从缓存加载
    //  核心模块
    //  路径形式的文件模块
    //  第三方模块
    //     node_modules/art-template/
    //     node_modules/art-template/package.json
    //     node_modules/art-template/package.json main
    //     index.js 备选项
    //     进入上一级目录找 node_modules
    //     按照这个规则依次往上找，直到磁盘根目录还找不到，最后报错：Can not find module xxx
    //     一个项目有且只有一个 node_modules 而且是存放到项目根目录

    //main 属性中记录了 art-template 的入口模块
    //然后加载使用这个第三方包
    //实际上加载的还是文件

    //如果 package.json 文件不存在或者 main 指定的入口模块没有
    //则 node 会自动找该目录下的 index.js
    //也就是说 index.js 会作为一个默认备选项

    //如果以上任何一个条件不成立，则会进入上一级目录中的 node_modules 目录查找
    //如果上一级还没有，则继续往上上一级查找
    //。。。
    //如果直到当前磁盘根目录还找不到，最后报错：
    // can not find module.xxx

    //注意：我们一个项目有且只有一个 node_modules 放在根目录中，这样的话项目中所有的子目录都可以访问到
    //不会出现多个 node_modules

    var template = require("art-template");

    require("a");
    ```

  * npm
    - node package manager

  - npm 网站

  ```shell
     npmjs.com
  ```

  - npm 命令行工具
    npm 的第二层含义就是一个命令行工具，只要逆安装了 node 就已经安装了 npm
    npm 也有版本这个概念
    可以通过命令行中输入:

  ```shell
  npm --version
  ```

  升级 npm

  ```shell
  npm install --global npm
  ```

  - 常用命令

  * npm init
    - npm init -y 可以跳过向导，快速生成
  * npm install
    - 一次性把 dependencies 选项中的依赖项全部安装
    - npm i
  * npm install 包名
    - 只下载
  * npm install --save 包名
    - 下载并保存依赖项(package.json 文件中的 depondencies 选项)
    - npm i -S 包名
  * npm uninstall 包名
    - 只删除，如果有依赖会依然保存
  * npm uninstall --save 包名
    - 删除的同时也会把依赖信息也去除
    - npm un -S 包名
  * npm help
    - 查看使用帮助
  * npm 命令 --help
    - 查看指定命令的使用帮助
    - 例如我忘记了 uninstall 命令的简写，这个时候，可以输入 `npm uninstall --help` 来查看使用帮助

  - 解决 npm 被墙问题
    npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题
    http://npm.taobao.org/ 淘宝的开发团队把 npm 在国内做了一个备份
    安装淘宝的 cnpm

  ```shell
  # 在任意目录执行都可以
  # --global 表示安装到全局，而非当前目录
  # -- global 不能省略，否则不管用
  npm install --global cnpm
  ```

  接下来你安装包的时候把之前的 `npm` 替换成 `cnpm`
  举个例子

  ```shell
  # 这里还是走国外的 npm 服务器，速度比较慢
  npm install jquery

  # 使用cnpm就会通过淘宝的服务器来下载 jquery
  cnpm install jquery
  ```

  如果不想安装`cnpm`又想使用淘宝的服务器来下载：

  ```shell
  npm install jquery --registry=https://registry.npm.taobao.org
  ```

  但是每一次手动这样加参数很麻烦，所以我们可以把这个选项加入配置文件中：

  ```shell
  npm config set registry https://registry.npm.taobao.org
  ```

  只要经过了上面命令的配置，则你以后所有的 `npm install` 都会默认通过淘宝的服务器来下载。

  - package.json

    - 我们建议每一个项目都要有一个`package.json` 文件(包括描述文件),可以用来帮我们保存第三方包的依赖信息。
      这个文件可以通过 `npm init ` 的方式自动初始出来

```sehll
{
 "name": "npm-demo",
 "version": "0.0.1",
 "description": "测试",
 "main": "app.js",
 "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "南风",
 "license": "ISC",
 "dependencies": {
   "express": "^4.17.1"
 }
}

```

对于我们来说，最有用的是那个 `dependencies` 选项，可以用来帮我们保存第三方包的依赖信息
如果你的 `node_modules` 删除了也不用担心，我们只需要 `npm install`就会自动把`package.json` 中的 `dependencies` 中的所有依赖都下载回来。

- 建议每个项目的目录下都有一个 `package.json` 文件
- 建议执行 `npm install 包名` 的时候都加上 `--save` 这个选项，目的是用来保存依赖项信息

# 7.Express

原生的 http 在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度统一。
在 Node 中，有很多 Web 开发框架，我们这里以学习 `express` 为主。

- http://expressjs.com/

#### 7.1.起步

安装：

```javascript
npm install --save express
```

#### 7.1.2 hello word

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello word!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
```

#### 7.1.3.基本路由

路由器

- 请求方法
- 请求路径
- 请求处理函数
  get:

```javascript
//当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get("/", function (req, res) {
  res.send("Hello word");
});
```

post:

```javascript
//当你以 POST 方法请求 / 的时候，执行对应的处理函数
app.post("/", function (req, res) {
  res.send("Got a POST request");
});
```

#### 7.1.4.静态服务

```javascript
// /public资源
app.use(express.static("public"));

// /files资源
app.use(express.static("files"));

// /public/xxx
app.use("/static", experss.static("public"));

// /static/xxx
app.use("/static", experss.static("static"));

app.use("/static", express.static(path.join(_dirname, "public")));
```

#### 7.2 在 Express 中配置使用 `art-template` 模板引擎

- art-template-GitHub 仓库 https://github.com/aui/art-template
- art-template 官方文档 https://aui.github.io/art-template/express/
  安装：

```shell
npm install --save art-template
npm install --save express-art-template
```

配置：

```javascript
app.engine('html', require('express-art-template'));

```

使用：

```javascript
app.get('/',function(req,res){
  //express 默认会去项目中的 views 目录找 index.htnl
 res.render('index.html',{
   title:'hello word'
 })
})
```
如果希望修改默认的 `views` 视图渲染存储目录，可以：
```javascript
//注意：第一个参数 views 千万不要写错
app.set('views',目录路径)
```

- MongoDB

# 9.其他

#### 9.2.修改完代码自动重启

我们这里可以是哟个一个第三方命令行工具， `nodemon` 来帮我们解决频繁修改代码重启服务器问题。
`nodemon` 是一个基于 Node.js 开发的一个第三方命令行工具，我们使用的时候需要独立安装

```shell
npm install --global nodemon
```

安装完毕之后，使用：

```shell
node app.js

# 使用 nodemon
nodemon app.js
```

只要是通过 `nodemon app.js` 启动的服务，则它会监视你的文件变化，当文件发生变化的时候，自动帮你重启服务器。

#### 9.3 文件操作路径和模块路径

文件操作路径

```javascript
//在文件操作的相对路径中
//     ./data/a.txt 相对于当前目录
//     data/a/txt 相对于当前目录
//      /data/a.txt 当前文件模块所处磁盘根目录
//     c: /xx/xx 。。。 绝对路径
// fs.readFile("./data/a.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//     return console.log("读取失败");
//   }
//   console.log(data.toString());
// });
```

模块操作路径：

```javascript
//这里如果忽略了，则也是磁盘根目录
require("/data/foo.js");

//相对路径
require("./data/foo.js");

//模块加载的路径中的相对路径不能省略 ./
```
