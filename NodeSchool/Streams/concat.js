var concat = require('concat-stream');

process.stdin.pipe(concat(reverse))

function reverse(body) {
  process.stdout.write(body.reverse());
}
