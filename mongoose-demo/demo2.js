const mongoose = require("mongoose");
const { Schema } = mongoose;

//1.连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会被自动创建出来
mongoose.connect("mongodb://localhost:27017/test");
//2.设计文档结构(表结构)
//字段名称就是表结构中的属性名称
//约束的目的就是为了保证数据的完整性，不要有脏数据
const userSchema = new Schema({
  username: {
    type: String,
    required: true, //必须有
  },
  password: {
    type: String,
    required: true, //必须有
  },
  email: {
    type: String,
  },
});

//3.将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 model
//    第一个参数：传入一个大写单词字符串用来表示你的数据库名称
//                 mongoose 会自动将大写名称的字符串生成 小写复数的 集合名称
//                例如这里的 User 最终会变为 users 集合名称
//    第二个参数：架构 Schema
//
//    返回值：模型构造函数
var User = mongoose.model("User", userSchema);

//4.当我们有了模型构造函数之后，就可以使用这个构造函数对 User 中的数据为所欲为了

//********************
//#region 新增数据
//********************
// var admin=new User({
//     username:'admin2',
//     password:'123456',
//     email:'admin@admin.com'
// })

// admin.save(function(err,ret){
//     if(err){
//         console.log("保存失败")
//     }else{
//         console.log("保存成功")
//         console.log(ret)
//     }
// })
//********************
//#endregion /新增数据
//********************

//********************
//#region /查询数据
//********************
User.find(function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
        console.log(ret)
    }
})

// User.find(
//   {
//     username: "admins",
//     password:'123456'
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("查询失败");
//     } else {
//       console.log(ret,555);
//     }
//   }
// );

// User.findOne(
//     {
//       password:'123456'
//     },
//     function (err, ret) {
//       if (err) {
//         console.log("查询失败");
//       } else {
//         console.log(ret,555);
//       }
//     }
//   )
//********************
//#endregion /查询数据
//********************

//********************
//#region /删除数据
//********************
// User.remove({ username: "admin1" }, function (err, ret) {
//   if (err) {
//     console.log("删除失败");
//   } else {
//     console.log("删除成功");
//     console.log(ret);
//   }
// });
//********************
//#endregion /删除数据
//********************


//********************
//#region /更新数据
//********************
// User.findByIdAndUpdate( '5fb74fb712233936fc780ef2' ,{
//   password:'123'
// }, function (err, ret) {
//   if (err) {
//     console.log("更新失败");
//   } else {
//     console.log("更新成功");
//     console.log(ret);
//   }
// });
//********************
//#endregion /更新数据
//********************

