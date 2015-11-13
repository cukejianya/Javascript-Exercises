function curryN(fn, n) {
  n = n || fn.length;
  return rec(fn, n-1);
}

function rec(fn, n) {
  if (n <= 0) return fn.bind(null);
  return function () {
    var arg = Array.prototype.slice.call(arguments)[0];
    return rec(fn.bind(null, arg), n-1);
  }
}

module.exports = curryN

//Solution is so much cleaner
/*
function curryN(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN
*/
