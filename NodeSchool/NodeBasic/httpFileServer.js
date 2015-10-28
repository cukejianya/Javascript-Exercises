var http = require('http');
var fs = require('fs');
var path = process.argv[3];
var port = parseInt(process.argv[2]);

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'})
  var file = fs.createReadStream(path);
  file.pipe(res);
})

server.listen(port);
