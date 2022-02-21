const http = require('http');
const routing = require('./routing');

//set the host data
const hostname = "localhost";
const port = 3000;

const server = http.createServer(routing);

//set the Listerner
server.listen(port,hostname, ()=>{
    //send a litile message on the console
    console.log("Start Server...")
});


