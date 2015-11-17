var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next){
  var str = buffer.toString().toUpperCase();
  this.push(str);
  next();
}

function end(done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout);
