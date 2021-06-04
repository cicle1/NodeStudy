const axios = require("axios");
const puppeteer = require("puppeteer");
const fs = require("fs");
const { fsWrite, fsRead } = require("./curd");
//将延迟函数封装成promise对象
function lcWait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("成功延迟:" + delay);
      } catch (e) {
        reject("失败延迟");
      }
    }, delay);
  });
}
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  async function parseTxt() {
    //读取文本内容
    let textContent = await fsRead("./book.txt");
    //正则匹配字符串
    let reg = /(\{.*?\})---/gis;
    let tempRes;
    let bookArr = [];
    while ((tempRes = reg.exec(textContent))) {
      //获取匹配结果
      let jsonStr = tempRes[1];
      //将字符串解析成对象
      let jsonObj = JSON.parse(jsonStr);
      //获取链接属性
      //let bookHref = jsonObj.href;
      bookArr.push(jsonObj);
    }
    return bookArr;
  }
  let bookArr = await parseTxt();
  let index = 0;

  async function downloadBook() {
    //根据索引值下载书
    //如果索引值大于书数量的总长度
    if (index == bookArr.length) {
      return "完成";
    }
    let bookObj = bookArr[index];
    index++;
    const page = await browser.newPage();
    await page.goto(bookObj.href + "8");
    //截取谷歌请求
    await page.setRequestInterception(true);
    //监听请求事件，并对请求进行拦截
    page.on("request", async (interceptedRequest) => {
      //通过URL模块对请求地址进行解析
      let urlObj = new URL(interceptedRequest.url());

      if (urlObj.href == bookObj.href + "8") {
        console.log(111);
        let ws = fs.createWriteStream("./book" + bookObj.title + ".epub");
        let url=interceptedRequest.url().slice(0,-1)
        console.log(url)
       // await page.goto(url);
        axios.get("https://sobooks.cloud/2021/05/18194.epub?__cf_chl_managed_tk__=0a50f5d7d70cd3c97f3416de7bfa089d2e0a246a-1622712882-0-AZhpcP6TboSt_cwiTOtHUj0a-fsBynXQk1G85DM67FqW2UmSE37H8PYjq-2Vid49dFBak6fhn7yrSr9XW-TOytc4o_iGj-6MIG_XF6fohSLDQwPM3YMNzdtBRrCExMuiRxbcdlDFmrPQyESU__67jgpROgSlnWhdF8DH2i_NctJCqMCDIIAhhgcZY9TFH1J4Ekr6MAO9SFa1x7U7XEJNQ2NAATsVEUGNmYPA8qQ9KXFRPt1w7KH2Q3GNFAb3swgNEmOpb5-XuwUKXXVnSO-oPxVKCyyGz1eusMnsItnm2gQ2Z4-w5OQg9pBQcKjdY7bybYBKvoCwEIIKvZq6tLqDfk_eE0N3pEQ0loX5wbZzHP2z2B-o6kQzejT1tjvYKcutZ8SKcAaX0pKkW6WBUg0zy6k8v8vNCg5EZM6uxenn6Q7GdIDdPw75vgowKjID76i9xgKT2d3TV56dw4isloHM-OIK6jpu1tInnSb3qGAtcrLKODIhQ-qMDn28iSybo0itYzrvEtPFAR1PTplRp-pAGQ2j0HNtG0TlJgGjX_Q30V3DyQMasTxFHhTChQjFRDp32ghiNG4xZ70AfcBgvdg-TB4zsZeDcDrxpdj5xcbq-59fruS2BTSi19-wtIp31KgykyxZ99KXePn0BYeK7c_DLQeEdO3WBKj2kjAoqBFujefE3QJB-9KP4Wu7dF2AgguL4Q", {responseType: "stream" }).then((res) => {
          res.data.pipe(ws);
          ws.on("close", () => {
            console.log("下载完成：", bookObj.title);
            //下完一本再下另外一本
            //downloadBook();
          });
        });
      } else {
        interceptedRequest.abort();
      }
    });
  }
  downloadBook();
})();
