const buf = Buffer.from("a");

// create a new buffer object of the specified size
//Buffer.alloc(size, fill, encoding);
const result = Buffer.alloc(15, "a", "utf8");

// create a new buffer object of the specified size
// Buffer.allocUnsafe(size);
const result1 = Buffer.allocUnsafe(10);

// console.log(result1.fill(92).toString());

// returns the numbers of bytes in a specified object
const len = Buffer.byteLength(buf);
// console.log(len);

// compares two Buffer object
// 0 if they are equal
// 1 if buf1 is higher than buf2
// -1 if buf1 is lower than buf2
const buf2 = Buffer.from("b");
const x = Buffer.compare(buf, buf2);
// console.log(x); //0

// Concatenates an array of Buffer objects into one Buffer object
const buf3 = Buffer.from("a");
const buf4 = Buffer.from("b");
const buf5 = Buffer.from("c");
const arr = [buf3, buf4, buf5];

const buf6 = Buffer.concat(arr);
// console.log(buf6.toString());
