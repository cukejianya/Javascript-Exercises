var fs = require('fs');
var http = require('http');
// var util = require('util');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    // console.log(util.inspect(req) +'\n\n'+ util.inspect(res))
    req.setEncoding('utf8');
    req.on('data', function pipe2Array(data) {
      data = data.toUpperCase();
      res.write(data);
    });
    req.on('end', function done(){
      res.end();
    });
  }
})
server.listen(process.argv[2])
