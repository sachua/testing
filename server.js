const http = require('http');
const port = process.env.PORT || 8080

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello World! My name is testing and my owner is sachua');
}

const server = http.createServer(requestListener);
server.listen(port);