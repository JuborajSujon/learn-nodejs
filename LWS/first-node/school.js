const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class Started");

    // listen event after

    setTimeout(() => {
      this.emit("bellRing", {
        period: "first",
        text: "period ended",
      });
    }, 3000);
  }
}

module.exports = School;
