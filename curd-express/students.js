/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require("fs");

var dbPath = "./db.json";

/**
 * 获取所有学生列表
 * callback 中的参数
 *     第一个参数是err
 *     成功 null
 *     错误 是错误对象
 *     第二个参数是结果
 *     成功是数组
 *     错误 是undefind
 * return []
 */
exports.find = function (callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};

/**
 * 根据id获取对应学生信息对象
 * @parms {number}   id        学生id
 * @parms {Function} callback  回调函数
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var ret = students.find(function (item) {
      return item.id === id;
    });
    callback(null, ret);
  });
};

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    //处理 id 的唯一的 ， 不重复
    student.id = students[students.length - 1].id + 1;

    //把用户传递的对象保存到数组中
    students.push(student);

    //把对象数据转化成字符串
    var fileDate = JSON.stringify({
      students: students,
    });

    //把字符串写入文件
    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      //成功就没错,所以错误对象是null
      callback(null);
    });
  });
};

/**
 * 更新学生
 */
exports.updateById = function (students, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    //你要修改谁，就需要把谁找出来
    //EcmaScript 6 中的一个数组方法：find
    //需要接收一个函数作为参数
    //当某个遍历项符合 item.id===student.id 条件的时候，find 会终止遍历，同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id;
    });

    //这种方式你就写死了，有100 个难道写100次吗
    // stu.name=student.name
    // stu.age=student.age

    //遍历拷贝对象
    for (var key in student) {
      stu[key] = student[key];
    }

    //把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students,
    });

    //把字符串保存到文件中
    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      //成功就没错,所以错误对象是null
      callback(null);
    });
  });
};

/**
 * 删除学生
 */
exports.delete = function () {};
