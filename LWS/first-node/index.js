const eventEmitter = require("events");

class MyEmitter extends eventEmitter {
  value = "Hello";

  set(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  constructor() {
    super();
  }
}

const emitter = new MyEmitter();

// Register a listener
emitter.on("start", function (a, b) {
  console.log(a, b, this, this === emitter);
  console.log(this.get());
  this.set("World");
  console.log(this.get());
});

// Emit an event
emitter.emit("start", 1, 2);
