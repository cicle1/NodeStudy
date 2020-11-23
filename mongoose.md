# mongoose

- 官网： https://mongoosejs.com/
- 官方指南： https://mongoosejs.com/docs/guide.html
- 官方 API 文档：https://mongoosejs.com/docs/api.html

## 1.MongoDB 数据库的基本概念

- 可以有多个数据库
- 一个数据库中可以有多个集合(表)
- 一个集合可以有多个文档(表记录)
- 文档结构灵活，没有任何限制
- MongoDB 非常灵活，不需要像 MySQL 一样先创建数据库、表、设计表结构
  - 在这里只需要，当你需要数据的时候，只需要往哪个集合操作就可以了
  - 一切由 MogoDB 来帮你自动完成建库建表这件事

```javascript
{
    qq:{
        user:{
            {name:'张三',age:15},
            {name:'张二',age:15},
            {name:'张四',age:12},
            {name:'张无',age:13},
            {name:'张六',age:10},
        },
        products:{

        }
        ...
    },
    taobao:{

    },
    baidu:{

    }
}
```

## 2.起步

安装：

```shell
npm i mongoose
```

hello word:

```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//创建一个模型
//就是在设计数据库
//MongoDB 是动态的，非常灵活，只需要在代码中设计你想要的数据就可以了
//mongoose 这个包就可以让你的设计编写过程变得非常简单

const Cat = mongoose.model("Cat", { name: String });

//实例化一个 Cat
const kitty = new Cat({ name: "喵喵" });

//持久化保存 Kitty 实例
kitty.save().then((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("meow");
  }
});
```

## 3.官方指南

### 3.1 设计 Scheme 发布 Model

```javascript
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
```

### 3.2.增加数据

```javascript
var admin = new User({
  username: "admin",
  password: "123456",
  email: "admin@admin.com",
});

admin.save(function (err, ret) {
  if (err) {
    console.log("保存失败");
  } else {
    console.log("保存成功");
    console.log(ret);
  }
});
```

### 3.3.查询

查询所有：

```javascript
User.find(function (err, ret) {
  if (err) {
    console.log("查询失败");
  } else {
    console.log(ret);
  }
});
```

按条件查询所有：

```javascript
User.find(
  {
    username: "admins",
    password: "123456",
  },
  function (err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      console.log(ret, 555);
    }
  }
);
```

按条件查询单个：

```javascript
User.findOne(
  {
    username: "admins",
    password: "123456",
  },
  function (err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      console.log(ret, 555);
    }
  }
);
```

### 3.4.删除数据
根据条件删除所有：
```javascript
User.remove({ username: "admin1" }, function (err, ret) {
  if (err) {
    console.log("删除失败");
  } else {
    console.log("删除成功");
    console.log(ret);
  }
});
```
根据条件删除一个：
```javascript
Model.findOneAndRemove(conditions,[options],[callback])
```
根据id删除一个：
```javascript
Model.findByIdAndRemove(id,[options],[callback])
```
## 3.5.更新数据
根据条件更新所有：
```javascript
Model.update(condition,doc,[options],[callback])
```
根据指定条件更新一个：
```javascript
Model.findOneAndUpdate([conditions],[update],[options],[callback])
```
根据id更新一个：
```javascript
User.findByIdAndUpdate( '5fb74fb712233936fc780ef2' ,{
  password:'123'
}, function (err, ret) {
  if (err) {
    console.log("更新失败");
  } else {
    console.log("更新成功");
  }
});
```

