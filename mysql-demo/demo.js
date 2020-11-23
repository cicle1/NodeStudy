var mysql = require("mysql");

//1.创建连接
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student",//数据库名
});

//2.连接数据库
connection.connect();

//3.执行数据操作

//查询整表
var  sql = 'SELECT * FROM users';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
// connection.query("SELECT * FROM `users`", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The soletion is:", results);
// });

//插入一条数据

// var  addSql = 'INSERT INTO users(Id,username,password) VALUES(NULL,?,?)';
// var  addSqlParams = ['admin2', '123'];
// connection.query(addSql,addSqlParams, function (error, results) {
//   if (error) throw error;
//   console.log("The soletion is:", results);
// });
// connection.query('INSERT INTO users VALUES(NULL,"admin","123456")', function (error, results, fields) {
//   if (error) throw error;
//   console.log("The soletion is:", results);
// });

//更新数据
// var modSql = 'UPDATE users SET username = ?,password = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',1];
// connection.query(modSql,modSqlParams, function (error, results, fields) {
//     if (error) throw error;
//     console.log("The soletion is:", results);
//   });



// var delSql = 'DELETE FROM users where id=2';
// //删
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });
 

//4.关闭连接
connection.end();


