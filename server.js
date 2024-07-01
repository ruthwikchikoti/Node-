const http = require('http'); 
const fs = require('fs');

const fileContent = fs.readFileSync('index.html'); 
const loginContent = fs.readFileSync('login.html');

const server = http.createServer((_req, res) => {
    if(_req.url === '/login'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        
        res.end(loginContent);
    }else{
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.end(fileContent); 
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
});
