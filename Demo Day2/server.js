const http = require('http')
const hostname = 'localhost'
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    switch(req.url){
        case "/home":
        res.end("<h1>Home page</h1>");
        break;
        case "/about":
        res.end("<h1>About page</h1>");
        break;
        default:
        res.end("<h1>File ko ton tai!!!</h1>");
        break;    
    }
})

server.listen(port,hostname,()=>{
    console.log('Sever is running on Port'+port);
})