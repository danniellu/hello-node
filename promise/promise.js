const fs = require("fs");



function test(){
    return new Promise((resolve,reject)=>{
        fs.readFile('input.txt',"utf-8", (err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data);
          }
        });
    })
}
test()
.then((data)=>{
  console.log("正確讀到", data)
})
.catch((err)=>{
  console.error("發生錯誤", err)
})