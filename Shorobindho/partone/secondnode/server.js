import http from "http";
import dotenv from "dotenv";
import fs from "fs";

//enviroment init
dotenv.config();
const PORT = process.env.PORT;

let page = fs.readFileSync("./data/students.json", "utf-8");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(page);
    res.end();
  })
  .listen("5050", () => {
    console.log("our server runing");
  });
