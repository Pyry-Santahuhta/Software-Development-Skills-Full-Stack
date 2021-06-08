const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => console.log("Event fired!"));

myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
