var http = require('http');
var urlApi = require('url');


var server = http.createServer(function(req, res){


  var url = urlApi.parse(req.url, true);
  var pathname = url.pathname
  var query = url.query
  var date = new Date(query.iso);

  var data;

  if (pathname === '/api/parsetime') {
    data = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
  } else {
    data = { "unixtime": date.getTime() }
  }
  if (data) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(process.argv[2]);
