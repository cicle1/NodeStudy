let express = require("express");
let app = express();
let sqlQuery = require("./lcMysql");


app.get("/", async (req, res) => {
  //数据库表book前28的book获取回来
  let strSql =
    "select id,bookName,bookimg,author,category from book limit 0,28";
  let result = await sqlQuery(strSql);
  console.log(Array.from(result));
  res.json(Array.from(result));
});

app.get("/xiaoshuowenxue",async (req, res) => {
  let sreSql =
    "select id,bookName,bookimg,author,category from book where category='小说文学'";
  let result = await sqlQuery(sreSql);
  res.json(Array.from(result));
});

app.get("/books/:bookid",async (req, res) => {
  let strSql = "select * from book where id = ?";
  let bookid = req.params.bookid;
  let result = await sqlQuery(strSql,[bookid]);
  res.json(Array.from(result));
});
//动态路由
app.get('/news/:categoryid/:newsid/',(req,res)=>{
  res.send("新闻id页面:\n"+req.params.newsid+"分类ID"+req.params.categoryid)
})

app.get('/news/:categoryid/:newsid/',(req,res,next)=>{
 req.lcHost="127.0.0.1"
 next()
},(req,res,next)=>{
  res.send("新闻id页面:\n"+req.params.newsid+"分类ID"+req.params.categoryid)
})
app.listen(3000);
