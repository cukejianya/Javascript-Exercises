var through = require('through2');
var split = require('split');
var stream = through(write, end);
var i = 0;
function write(buffer, encoding, next) {
  var str = buffer.toString();
  str = '\n'+str;
  i++
  if (i%2 === 1){
    this.push(str.toLowerCase());
  } else {
    this.push(str.toUpperCase());
  }

  next();
}

function end(done){
  done();
}


process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
