const axios = require("axios");
const { fsWrite, fsRead, fsDir } = require("./curd");
//console.log(axios);
function req(httpURL) {
  return new Promise((resolve, reject) => {
    axios.get(httpURL).then((res) => {
      resolve(res);
    });
  });
}
//获取起始页面所有分类
//获取分类里的电影链接
//根据电影链接获取电影的详细信息
let indexUrl = "https://www.1905.com/vod/list/n_1/o3u1p1.html";

//获取获取起始页面的所有分类地址
async function getClassUrl() {
  let { data } = await req(indexUrl);
  //console.log(data)
  let reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/gis;
  //解析html内容

  let result = reg.exec(data)[1];
  //console.log(result);
  let reg1 =
    /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" >(.*?)<\/a>/gis;
  let res;
  let arrClass = [];
  while ((res = reg1.exec(result))) {
    if (res[2] != "全部") {
      let obj = {
        className: res[2],
        url: res[1],
      };
      arrClass.push(obj);
      await fsDir("./movies/" + res[2]);
      getMovies(res[1], res[2]);
    }
  }

  //console.log(arrClass);
}

//通过分类，获取页面中的电影链接
async function getMovies(movieUrl, moveType) {
  let { data } = await req(movieUrl);
  //console.log(data)
  let reg =
    /<a class="pic-pack-outer" target="\_blank" href="(.*?)" (.*?)><img/gis;
  let res;
  let movieList = [];
  while ((res = reg.exec(data))) {
    //改进可以改为迭代器，提升性能
    movieList.push(res[1]);
    parsePage(res[1], moveType);
  }
  fsDir(moveType);
  //console.log("分类：", moveType);
  console.log(movieList);
}

async function parsePage(url, movieType) {
  let { data } = await req(url);

  let reg =
    /<h1 class="playerBox-info-name playerBox-info-cnName">(.*?)<\/h1>.*?id="playerBoxIntroCon">(.*?)<a.*?导演.*?target="\_blank" title="(.*?)" data-hrefexp/gis;
  let res = reg.exec(data);
  console.log(res[1]);
  let movie = {
    name: res[1],
    brief: res[2],
    daoyan: res[3],
    movieUrl: url,
    movieType: movieType,
  };
  let strMovie = JSON.stringify(movie);
  fsWrite("./movies/" + movieType + "/" + res[1] + ".json", strMovie);
}
getClassUrl();
