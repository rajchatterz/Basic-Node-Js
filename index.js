// const fs = require('fs')
// // Async way
// // because it is an asynchrounous function
// fs.readFile('./raj.txt','utf-8',(err,data)=>{
//     if(err){
//         return err
//     }
//     console.log(data)
// })

// console.log("I am the first")

// // lets make it a async sync function

// const a = fs.readFileSync('./raj.txt','utf-8')
// console.log(a)
// console.log("I am first")

// let b = "raj Chatterjee"
// fs.writeFileSync('./raj2.txt',b)

// const file = fs.readFileSync('./raj2.txt','utf-8')
// console.log(file)


// Building a server
const http = require('http')

const fs = require('fs')
const home = fs.readFileSync('./index.html','utf-8')
const port= 8080
const server = http.createServer((req,res) =>{
    if(req.url==="/about"){
        res.end("<h1>About page</h1>")
    }
    
    if(req.url==='/contact'){
        res.end("<h1>Contact Page </h1>")
    }
    if(req.url==='/service'){
        res.end("servce page")
    }
    if(req.url==='/'){
       return  res.end(home)
    }
    else{ 
        res.end("Nothings")
    }
})
server.listen(port,"localhost",()=>{
    console.log("sever is running successfully")
})
