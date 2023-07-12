
const os = require('os');
console.log("Hi I am Test nodeApp")


var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);
