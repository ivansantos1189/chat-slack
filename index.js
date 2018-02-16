var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-typ': 'text/plain' })
    res.end('Hello world')
}).listen(3000)

