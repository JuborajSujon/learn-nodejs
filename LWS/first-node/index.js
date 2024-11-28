const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

// listen for an event
emitter.on("bellRing", (period) => {
  console.log("Ring ring ring, " + period + " third period will start soon");
});
// raise an event

setTimeout(() => {
  emitter.emit("bellRing", "second period ended");
}, 3000);
