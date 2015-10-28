function gcd(a, b) {

  a = Math.abs(a);
  b = Math.abs(b);

  x = Math.max(a, b);
  y = Math.min(a, b);

  if ((x || y) === 0) {
    if (x === y) {
      return undefined;
    } else {
      return x;
    }
  } else {
    while (x > 0) {
      c = x;
      x = y%x;
      y = c;
    }
    return y;
  }
}

module.exports = gcd;

if (process.argv[2] = 'run') {
  a = parseInt(process.argv.slice(2));
  b = parseInt(process.argv.slice(3));
  console.log(gcd(a, b));
}
