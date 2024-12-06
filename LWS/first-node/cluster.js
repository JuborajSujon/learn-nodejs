/**
 * Cluster Module Contd.
 * index.js (Cluster Master) ⬇️
 * 1. Worker 1
 * 2. Worker 2
 *
 * When we run node index in the terminal the file is treated as a cluster master and this master is in charge of spawnig new workers which run an instance of our node application
 *
 * It is vary important to node that the master is only in charge of the workers (starting, stopping, restaring etc but does not execute the application code itself, it is not in charge of handling incoming requests, reading files etc )
 *
 * That is up to the individual worker instance. each worker gets its own events loop memory and V8 instance, in doing so we are able to share the workload across different instances without having to block incoming requests
 */

const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");
const process = require("node:process");

const numCPUs = OS.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} // Simulate CPU worker
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    }
  });

  server.listen(8000, () => console.log("Server is running on port 8000"));
}
