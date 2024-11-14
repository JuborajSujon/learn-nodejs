const http = require('http');
const fs = require('fs');


// create a server using raw nodejs
const server = http.createServer();


//listener 
server.on("request", (req, res) => {
  if (req.url === "read-file", req.method === "GET") {
    
    // create read stream 
    const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt")
    
    readableStream.on("data", (buffer) => {
      res.write(buffer)
    })

    readableStream.on('end', () => {
      res.end("Hello from world");
    })
  };
  
})

server.listen(5000, () => {
  console.log("server is listenig on port 5000")
})

