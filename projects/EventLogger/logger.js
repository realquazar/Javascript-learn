const fs = require("fs");
const os = require("os");

const EventEmmiter = require("events");

class Logger extends EventEmmiter {
    log(message) {
        this.emit("message", {message});
    }    
}

const logger = new Logger()
const logFile = "./eventlog.txt"

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on("message", logToFile);

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100
    logger.log(`Current Memory usage: ${memoryUsage.toFixed(2)}%`)
}, 3000)

logger.log("Application started")
logger.log("Application event occured")
