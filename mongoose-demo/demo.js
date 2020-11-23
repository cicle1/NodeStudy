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

for (var i = 0; i < 100; i++) {
  //实例化一个 Cat
  const kitty = new Cat({ name: "喵喵" + i });

  //持久化保存 Kitty 实例
  kitty.save().then((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("meow");
    }
  });
}
