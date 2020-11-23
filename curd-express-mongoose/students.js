var mongoose = require("mongoose");

mongoose.set('useFindAndModify', false)


mongoose.connect("mongodb://localhost:27017/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
  },
});

//直接导出模型构造函数
module.exports = mongoose.model("Student", studentSchema);
