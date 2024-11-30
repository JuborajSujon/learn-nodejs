const eventEmitter = require("events");

class MyEmitter extends eventEmitter {
  value = 0;
  set() {
    this.value = 1;
  }
  get() {
    return this.value;
  }
}

const emitter = new MyEmitter();

// register event handler
emitter.on("start", (a, b) => {
  console.log("start event", this);
  setTimeout(() => {
    console.log("After 3 seconds", a, b);
  }, 3000);
});

// fire event
emitter.emit("start", 1, 2);
