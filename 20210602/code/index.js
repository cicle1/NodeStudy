const puppeteer = require("puppeteer");

async function test() {
  const options = {
    //设置视窗的宽高
    defaultViewport: {
      width: 1600,
      height: 1000,
    },
    //设置为有界面，如果为true，则为无界面
    headless: false,
  };
  //puppeteer.launch实例开启浏览器
  //可以传入一个options对象，可以配置为无界面浏览器，也可以配置为有界面浏览器
  //无界面浏览器性能更高更快，有界面一般用于调试开关
  const browser = await puppeteer.launch(options);
  //打开页面
  const page = await browser.newPage();
  //访问页面
  await page.goto("https://www.ygdy8.net/");
  //截图
  //await page.screenshot({path:'screenshot.png'})

  //获取页面内容
  //$$eval函数使得，我们的回调函数可以运行在浏览器中，并且可以通过浏览器的方式进行输出
  let eles = await page.$$eval("#menu li a", (elements) => {
    console.log(elements);
    //创建一个数组去收集元素的信息，这里我们需要收集地址和内容
    let element = [];
    elements.forEach((item, i) => {
      if (item.getAttribute("href") != "#") {
        let eleObj = {
          href: item.getAttribute("href"),
          text: item.innerText,
        };
        element.push(eleObj);
        console.log(eleObj);
      }
    });
    return element;
  });
  //浏览器可以监听控制台的输出
  // page.on("console", (eventMsg) => {
  //   console.log(eventMsg.text());
  // });
  console.log(eles)
  //打开国内的电影
  let gnPage= await browser.newPage()
  console.log(eles[2].href)
  await gnPage.goto("https://www.ygdy8.net"+eles[2].href)
}
test();
