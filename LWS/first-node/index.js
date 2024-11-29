const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

// listen for an event
emitter.on("bellRing", () => {
  console.log("Ring ring ring");
});
// raise an event

setTimeout(() => {
  emitter.emit("bellRing");
}, 3000);
