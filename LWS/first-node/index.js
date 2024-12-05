const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  sTime = "7:00 AM";
  eTime = "8:00 AM";
  startTime() {
    console.log(`It has started ${this.sTime}`);
  }
  endTime() {
    console.log(`Arriaval Time ${this.eTime}`);
  }
}

const myEmitter = new MyEmitter();

myEmitter.on("event", function (a, b) {
  console.log("an event occurred!");
  console.log(a, b, this);
});

myEmitter.on("start", function () {
  this.startTime();

  setImmediate(() => {
    console.log("This happens asynchronously");
  });

  this.endTime();
});

myEmitter.once("wakeup", () => {
  console.log("I wake up moring at 7 AM");
});

// myEmitter.emit("start");
// myEmitter.emit("event", 1, 2);

myEmitter.emit("wakeup");
myEmitter.emit("wakeup");
