const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

const emitter = new MyEmitter();

let m = 0;

// register event handler
emitter.once("start", () => {
  console.log(++m);
});

// first event handler
emitter.emit("start");

// second event handler
emitter.emit("start");
