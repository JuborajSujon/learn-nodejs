const EventEmiter = require('events');

// create instance
const myEmitter = new EventEmiter();

// listener 
myEmitter.on('birthday', () => {
  console.log("happy birthday to you")
});

myEmitter.on("birthday", () => {
  console.log("i will send a gift")
});

myEmitter.on("birthday", (gift) => {
  console.log(`i will send a ${gift}`)
})


myEmitter.emit("birthday", "bike")