import http from "http";
import fs from "fs";

let page = fs.readFileSync("./db.json", "utf-8");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(page);
    res.end();
  })
  .listen("5050", () => {
    console.log("our server runing");
  });
