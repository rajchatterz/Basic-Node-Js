const fs = require('fs')
// Async way
// because it is an asynchrounous function
fs.readFile('./raj.txt','utf-8',(err,data)=>{
    if(err){
        return err
    }
    console.log(data)
})

console.log("I am the first")

// lets make it a async sync function

const a = fs.readFileSync('./raj.txt','utf-8')
console.log(a)
console.log("I am first")

let b = "raj Chatterjee"
fs.writeFileSync('./raj2.txt',b)

const file = fs.readFileSync('./raj2.txt','utf-8')
console.log(file)