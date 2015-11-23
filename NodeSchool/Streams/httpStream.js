var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet()
var thrStream = through(write, end);
//.pipe(process.stdout);

function write(buffer, en, next) {
  var html = buffer.toString().toUpperCase();
  //console.log(html);
  this.push(html);
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream().pipe(thrStream).pipe(process.stdout);
