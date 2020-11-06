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
var template=require('art-template')
