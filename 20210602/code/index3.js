const puppeteer = require("puppeteer");
const fs = require("fs");
const httpUrl = "https://sobooks.cc/";
//将延迟函数封装成promise对象
function lcWait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功延迟:" + delay);
    }, delay);
  });
}
(async () => {
  const debugOptions = {
    //设置视窗的宽高
    defaultViewport: {
      width: 1600,
      height: 1000,
    },
    //设置为有界面，如果为true，则为无界面
    headless: false,
    //设置放慢每个步骤的毫秒数
    slowMo: 250,
  };
  const options = {
    headless: true,
  };

  const browser = await puppeteer.launch(options);

  async function getAllNum() {
    const page = await browser.newPage();
    await page.goto(httpUrl);
    //截取谷歌请求
    await page.setRequestInterception(true);
    //监听请求事件，并对请求进行拦截
    page.on("request", (interceptedRequest) => {
      //通过URL模块对请求地址进行解析
      let urlObj = new URL(interceptedRequest.url());
      if (urlObj.hostname.indexOf("google")!=-1) {
        //如果是谷歌的广告请求那么就放弃当次请求 因为谷歌请求响应太慢
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });
    //设置选择器，获取总页数
    let pageNum = await page.$eval(".pagination li:last-child span", (ele) => {
      const text = ele.innerHTML.slice(1, -1).trim();
      return text;
    });
    page.close();
    return pageNum;
  }
  let pageNum = await getAllNum();
  console.log(pageNum);
  async function pageList(num) {
    const pageListUrl = "https://sobooks.cc/page/" + num;
    let page = await browser.newPage();
    //访问列表地址页
    await page.goto(pageListUrl);

    let listPage = await page.$$eval(
      ".card .card-item .thumb-img>a",
      (elements) => {
        let arr = [];
        elements.forEach((ele, i) => {
          let obj = {
            href: ele.getAttribute("href"),
            title: ele.getAttribute("title"),
          };
          arr.push(obj);
        });
        return arr;
      }
    );
    page.close();
    //通过获取的数组地址个标题去请求书的详情
    let count = 1;
    listPage.forEach(async (pageObj, i) => {
      await lcWait(4000 * i);
      console.log(count)
      console.log(listPage.length)
      console.log(num)
      if (count == listPage.length) {
        count = 0;
        num++;
        if (num <= pageNum) {
          pageList(num);
        } else {
          console.log("-----------本站下载链接全部收集完成！---------");
        }
        console.log("-----------第" + (num-1) + "页下载链接收集完成！---------");
      } else {
        count++
        getPageInfo(pageObj);
      }
    });
  }
  async function getPageInfo(pageObj) {
    let page = await browser.newPage();
    //截取谷歌请求
    await page.setRequestInterception(true);
    //监听请求事件，并对请求进行拦截
    page.on("request", (interceptedRequest) => {
      //通过URL模块对请求地址进行解析
      let urlObj = new URL(interceptedRequest.url());
      if (urlObj.hostname.indexOf("google")!=-1) {
        //如果是谷歌的广告请求那么就放弃当次请求 因为谷歌请求响应太慢
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });
    await page.goto(pageObj.href);
    let inputEle = await page.$(".e-secret .euc-y-i");
    await inputEle.focus();
    await page.keyboard.type("939935");
    let btnEle = await page.$(".e-secret .euc-y-s");
    await btnEle.click();
    await page.waitForSelector(".e-secret a:last-child");
    let arrPage = await browser.pages();
    const endPage = arrPage[arrPage.length - 1];
    let eleA = await endPage.$(".e-secret a:last-child");

    let aHref = await eleA.getProperty("href");
    let rHref = aHref._remoteObject.value;
    rHref = rHref.split("?url=")[1];
    let content = `{"title":"${pageObj.title}","href":"${rHref}"}---\n`;
    fs.writeFile("book.txt", content, { flag: "a" }, function () {
      console.log("已将书下载路径写入：" + pageObj.title);
      page.close();
    });
    console.log(rHref);
  }
  let num=1
  pageList(num);
  // getPageInfo({ href: "https://sobooks.cc/books/18322.html",title:"狮子王" });
})();
