const mysql = require("mysql");
const cheerio = require("cheerio");
const axios = require("axios");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "book", //数据库名
});
connection.connect();
//将延迟函数封装成promise对象
function lcWait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功延迟:" + delay);
    }, delay);
  });
}
let page = 306;
let count = 1;
let getUrl = "https://sobooks.cc";
//获取所有页码
async function getAllPageNum() {
  const res = await axios.get(getUrl);
  let $ = cheerio.load(res.data);
  let pageNum = $(".pagination ul li:nth-last-child(1)")
    .text()
    .slice(1, -1)
    .trim();
  console.log(pageNum);
  getPageUrl(page);
}

//获取第N个页面的所有书籍链接
async function getPageUrl(num) {
  let httpUrl = `${getUrl}/page/${num}`;
  const res = await axios.get(httpUrl);
  //console.log(res.data);
  let $ = cheerio.load(res.data);
  $("#cardslist .card-item .thumb-img>a").each(async (i, ele) => {
    let href = $(ele).attr("href");
    //console.log(href, i);
    await lcWait(i * 13000);
    getBookInfo(href, count, page);
  });
}
async function getBookInfo(href, i, pageNo) {
  let res = await axios.get(href);
  let $ = cheerio.load(res.data);
  //书籍图片
  let bookImg = $(".article-content .bookpic img").attr("src");
  //书籍名称
  let bookName = $(".article-content .bookinfo li:nth-child(1)")
    .text()
    .slice(3);
  //书籍作者
  let author = $(".article-content .bookinfo li:nth-child(2)").text().slice(3);
  //标签
  let tag = $(".article-content .bookinfo li:nth-child(4)").text().slice(3);
  //时间
  let pubTime = $(".article-content .bookinfo li:nth-child(5)").text().slice(3);
  //简介
  let description = $(".article-content p").text();
  //分类
  let category = $("#mute-category a").text().trim();
  //   //下载地址
  //   let downloadUrl=$(""),bookDescription,authorDescription,downloadUrl
  let arr = [
    bookName,
    author,
    tag,
    pubTime,
    bookImg,
    href,
    description,
    category,
  ];
  const addSql =
    "insert into book(bookName,author,tag,pubTime,bookImg,bookUrl,description,category) VALUES(?,?,?,?,?,?,?,?)";
  connection.query(addSql, arr, function (error, results) {
    try {
      if (i == 32) {
        page++;
        count = 1;
        getPageUrl(page);
      } else {
        count++;
      }
    } catch (e) {
      if (i == 32) {
        page++;
        count = 1;
        getPageUrl(page);
      } else {
        count++;
      }
    }
    // if (error) throw error;

    console.log(`书籍写入数据库：${bookName}\n --第${pageNo}页，第${i}本书`);
  });
}
//let tempBook = "https://sobooks.cc/books/18356.html";
//getBookInfo(tempBook);
//getPageUrl(page);
getAllPageNum();
