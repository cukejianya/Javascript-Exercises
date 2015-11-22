var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet()
var thrStream = through(write, end);
var stream = tr.select('.loud').createStream();

function write(buffer, en, next) {
  var html = buffer.toString().toUpperCase();
  this.push(html);
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr).pipe(thrStream).pipe(process.stdout);
