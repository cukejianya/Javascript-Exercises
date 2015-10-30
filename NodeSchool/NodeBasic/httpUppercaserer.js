var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  if (res.method === 'POST')
  var file = fs.createReadStream(process.argv[2])
})
