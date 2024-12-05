const path = require("path");

const url = "E:\\Node JS\\Github File\\LWS\\first-node\\index.js";

// path.basename
const result = path.basename(url); // index.js

// path.basename(path[,suffix])
const result1 = path.basename(url, ".js"); // index

// path.delimiter
const result3 = process.env.PATH.split(path.delimiter);

// path.dirname(path)
const result4 = path.dirname(
  "E:\\Node JS\\Github FileLWS\\first-node\\path.js"
);

// const result5 = path.matchesGlob(url, "/index.js");

const result6 = path.isAbsolute(url);
const result7 = path.isAbsolute("/index.js");

console.log(result7);
