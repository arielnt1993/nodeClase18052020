const logger = require('./logger');
const path = require('path');
const os = require('os');
let pathObject = path.parse(__filename);

logger.log(pathObject);

let freeMem = os.freemem();
let totalMem = os.totalmem();

console.log('memoria libre',freeMem);
console.log('memoria total',totalMem);

logger.log(freeMem);
logger.log(totalMem);