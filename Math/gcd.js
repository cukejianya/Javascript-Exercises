function gcd(a, b) {
  a = Math.max(a, b);
  b = Math.min(a, b);
  if ((a || b) === 0) {
    return a;
  } else {
    while (a > 0) {
      c = a;
      a = b%a;
      b = c;
    }
    return b;
  }
}

console.log(gcd(30,25));
