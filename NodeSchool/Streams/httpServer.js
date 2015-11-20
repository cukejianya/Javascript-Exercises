var http = require('http');
var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next){
  var str = buffer.toString().toUpperCase();
  this.push(str);
  next();
}

function end(done) {
  done();
}

http.createServer(function (req, res){
  if (req.method === 'POST'){
    req.pipe(stream).pipe(res);
  }
}).listen(process.argv[2]);
