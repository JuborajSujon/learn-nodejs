import http from 'http'
import fs from 'fs';

let page = fs.readFileSync('./index.html');

http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/html"})
  res.write(page)
  res.end()
}).listen('5050', () => {
  console.log("our server runing")
})