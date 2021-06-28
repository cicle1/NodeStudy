let mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "book", //数据库名
});
con.connect();
console.log("数据库连接成功");
function sqlQuery(strSql, arr) {
  return new Promise((resolve, reject) => {
    con.query(strSql, arr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = sqlQuery;
