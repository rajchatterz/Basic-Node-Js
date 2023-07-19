const os = require('os')

const free = os.freemem()
const a1 = os.hostname()
const a2 = os.totalmem()
console.log(a2)
console.log(a1)
console.log(free)