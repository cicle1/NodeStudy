const cheerio = require("cheerio"); //获取HTML文档内容，内容的获取跟jquery一样
const axios = require("axios");
const fs = require("fs");
const path = require("path");

//将延迟函数封装成promise对象
function lcWait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功延迟:" + delay);
    }, delay);
  });
}

let httpUrl = "https://www.doutula.com/";

//获取页面总数

async function getNum() {
  let { data } = await axios.get(httpUrl);
  let $ = cheerio.load(data);
  let allNum = $(".pagination li:nth-last-child(2)").text();
  return allNum;
}
async function getListPage(pageNum) {
  let urlreq = "https://www.doutula.com/article/list/?page=" + pageNum;
  axios.get(urlreq).then((res) => {
    //console.log(res);
    //cheerio解析html文档

    let $ = cheerio.load(res.data);
    //获取当前页面的所有的表情页面的链接
    $("#home .col-sm-9>a").each((i, element) => {
      let pageUrl = element.attribs.href;
      let title = $(element).find(".random_title").text();
      let reltitle = title.match(/[\u4e00-\u9fa5]{2,6}/)[0];
      if (!fs.existsSync("./img/" + reltitle)) {
        fs.mkdir("./img/" + reltitle, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("成功创建目录：" + "./img/" + reltitle);
          }
        });
      }
      //console.log(reltitle);
      //console.log(pageUrl)

      parsePage(pageUrl, reltitle, i);
    });
  });
}

async function parsePage(pageUrl, title, i) {
  await lcWait(1000 * i);
  let { data } = await axios.get(pageUrl);
  // console.log(data)
  let $ = cheerio.load(data);
  $(".pic-content img").each((i, element) => {
    let imgUrl = element.attribs.src;
    console.log(imgUrl);
    let extName = path.extname(imgUrl);
    console.log(extName);

    //图片写入路径和名字
    let imgPath = `./img/${title}/${title}-${i}${extName}/`;
    //创建图片写入流
    let ws = fs.createWriteStream(imgPath);
    axios.get(imgUrl, { responseType: "stream" }).then((res) => {
      res.data.pipe(ws);
      console.log("图片加载完成:" + imgPath);
      res.data.on("close", function () {
        ws.close();
      });
    });
  });
}

async function getAll() {
  let allNum = await getNum();
  console.log(allNum);
  for (let i = 1; i < allNum; i++) {
    await lcWait(1000 * i);
    getListPage(i);
  }
}
getAll();
