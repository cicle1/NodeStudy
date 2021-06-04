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
    //设置放慢每个步骤的毫秒数
    slowMo:250,
  };
  //puppeteer.launch实例开启浏览器
  //可以传入一个options对象，可以配置为无界面浏览器，也可以配置为有界面浏览器
  //无界面浏览器性能更高更快，有界面一般用于调试开关
  const browser = await puppeteer.launch(options);
  //打开页面
  const page = await browser.newPage();
  //访问页面
  await page.goto("https://www.ygdy8.net/");
  //获取页面对象
  // elementHandles=await page.$$("#menu li a");
  // elementHandles[2].click();//通过点击打开国内电影
  
  //通过表单输入进行搜索
  inputEle=await page.$(".searchl input")
  //让光标进入到搜索框
  await inputEle.focus()
  //往输入框输入内容
  await page.keyboard.type("蝙蝠侠")
  //点击搜索按钮
  // let btnEle=await page.$(".searchr input[name='Submit']")
  // await btnEle.click()
  await
}
test();
