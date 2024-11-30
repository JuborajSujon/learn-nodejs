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
emitter.on("start", function (a, b) {
  console.log("start event fired");
  console.log(a + b);
  console.log(this.get());
  console.log(this.set());
  console.log(this.get());
  console.log(this.value + this.get());
});

// fire event
emitter.emit("start", 1, 2);
