function curryN(fn, n) {
  n = n || fn.length;
  return rec([], n, 0, fn);
}

function rec(fnArg, n, i, fn) {
  if (n-i <= 0) return fn.apply(null, fnArg);
  return function () {
    var arg = Array.prototype.slice.call(arguments);
    fnArg = fnArg.splice(0,i).concat(arg);
    return rec(fnArg, n, ++i, fn);
  }
}

function trampoline(fn) {
  while(fn && fn  instanceof Function) {
    fn = fn()
  }
  return fn;
}
module.exports = curryN
