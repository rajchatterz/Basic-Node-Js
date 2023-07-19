
// Building a server
const http = require('http')
const port= 8080
const server = http.createServer((req,res) =>{
    res.end("<h1>Hello World</h1>")
})
server.listen(port,"localhost",()=>{
    console.log("sever is running successfully")
})