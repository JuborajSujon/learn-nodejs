const {add, a} = require("./local-1.js");
const { add: add2, a : a2 } = require("./local-2.js");


const result = add(3, 4);
const result2 = add2(3, 4, 6);
console.log(result);
console.log("result2", result2);
console.log(a)
console.log("a2", a2)