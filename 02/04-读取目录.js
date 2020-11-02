var fs=require('fs')

fs.readdir('C:/Users/admin/Desktop/www',function(err,files){
    if(err){
        return console.log('目录不存在')
    }
    console.log(files)
})