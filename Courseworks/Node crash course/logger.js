const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called listener: ", data));

logger.log("Hello world");
logger.log("Test message");
logger.log("Wow fancy event listener");
