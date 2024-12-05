const assert = require("assert");

// assert()
// assert(50 - 50, "my sms go here");

// assert.deepEqual() method
const x = { a: { n: 0 } };
const y = { a: { n: 0 } };
const z = { a: { n: 1 } };

const result1 = assert.deepEqual(x, y);
// const result2 = assert.deepEqual(y, z);

console.log(result1);
// console.log(result2);
