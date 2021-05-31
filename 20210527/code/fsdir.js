const fs = require("fs")
const {writefs,readfs} = require("../../20210525/code/curd");

const textPath ="all.txt"
fs.readdir('../../20210525/code/',function(err,files){
  if(err){
    console.log(err)
  }else{
    console.log(files)
    files.forEach(async function(filename,i){
      let content =await readfs('../../20210525/code/'+filename)
      await writefs(textPath,content)
    })
  }
})