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
