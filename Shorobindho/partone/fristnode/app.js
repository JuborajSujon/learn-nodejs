const fs = require('fs')


// async funcion for write file 
fs.writeFile("data.txt", "Hi Node, You are awesome", (err, data) => {
  console.log(err , data)
})


// sync funcion for write file 
fs.writeFileSync('data2.txt', "Hello data file 2")