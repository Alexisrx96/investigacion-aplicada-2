const http = require('http');
const colors = require('colors');

const handleServer = (req, res) =>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.write('<h1>Hola mundo</h1>');
    res.end();
} 
const server = http.createServer(handleServer);

server.listen(3000,()=>{console.log('Server on port 3000'.green)});
