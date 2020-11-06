//在 Node 中，每个模块内部都有一个自己的 module 对象
// 该 module 对象中，有一个成员叫： export 也是一个对象
//也就是说如果你需要对外导出成员，只需要把导出的成员挂载到 module

//我们发现，每次导出接口成员的时候都通过 module
// 所以 Node 为了简化你的操作，专门提供了一个 

// var module = {
//   exports: {
//     foo: "bar",
//     add:function
//   },
// };


//也就是说在模块中还有这么一句代码
//var exports=module.exports

module.exports.foo = "bar";

module.exports.add = function (x, y) {
  return x + y;
};

//那就说明，我可以使用任意一方来导出成员
console.log(exports===module.exports)
//谁来 require 我，谁就得到 module.export
//默认在代码的最后有一句：

//return module.exports

//exorts.foo='hello'

//{foo:bar}
exports.foo='bar'

//{foo:bar,a:123}
module.exports.a=123

//exports!==module.exports
//最终return 的是 module.exports
//所以无论你exports 中的成员是什么都没用

exports={
  a:456
}



//{foo:'hah',a:123}
module.exports.foo='haha'

//没关系混淆你的
exports.c=456

//重新建立和 module.exports 之间的引用关系了
exports=module.exports

//由于在上面建立了引用关系，所以这里生效的
//{foo:'hah',a:789}
exports.a=789

//前面再牛逼，在这里全部推翻了，重新赋值
//最终得到的是 Function
module.exports=function(){
  console.log('hello')
}

//真正去用的时候：
//    导出多个成员：exports.xxx=xxx
//    导出多个成员也可以：module.exports={}
//    导出单个成员：module.exports
