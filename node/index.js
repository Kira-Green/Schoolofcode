const http = require('http');
const library = require("./library.js");
const PORT = 3000;
// create server
const server = http.createServer((req, res)=>{
    let name = library.getBookAuthor("Emma");
    res.end(name);
})
server.listen(PORT,()=> {
    console.log(`I am listening on port ${PORT}`)
})