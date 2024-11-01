import { writeFile, writeFileSync, appendFile, appendFileSync,readFileSync } from "fs";


// async funcion for write file 
writeFile("data.txt", "Hi Node, You are awesome", (err, data) => {
  console.log(err , data)
})

// sync funcion for write file 
writeFileSync('data2.txt', "Hello data file 2.")
// sync update function 
appendFileSync("data2.txt", "\nJs is the best")

// async update function
appendFile("data2.txt", "\nWe are devs", (err, data) => { })

// sync function 
const data = readFileSync('./db.json')
console.log(data.toString())