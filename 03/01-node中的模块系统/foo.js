var foo = "bar";
function add(x, y) {
  return x + y;
}

//这个不行
//exports=add

module.exports = add;
//如果一个模块需要直接导出某个成员，而非挂载的方式
//那么就必须使用下面这种方式
//你可以认为在每个模块的最后return 了这个export


//只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
//exports.add = add;

//exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现对外导出

//xports.str='hello'

//现在我有一个需求
//我希望加载得到直接就是一个：
//方法
//字符串
//数字
//数组
