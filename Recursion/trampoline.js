function trampoline(fn) {
  while (fn && fn instanceof Function) {
//continue if fn is not undefined/null and if it is still a
//function

    fn = fn();
  }
//we call the function and assign the result of called previous fn
//to new fn
  return fn;
//when we are done return fn when fn is the result and no longer
//function.
}

function factorial(n) {

  var recur = function(result, n) {
    if (n === 1)
      return result;

    return recur.bind(null, (result * n), (n - 1));
  };

  return trampoline2(recur.bind(null, 1, n));
}

console.log(factorial(process.argv[2]));

console.log('Hey');

function *jump(fn) {
  while (fn && fn instanceof Function) {
    fn = fn();
    yield fn;
  }
}

function trampoline2(fn) {
  var lift = jump(fn);
  var value;
  for (var elm of lift) {
    value = elm;
  }

  return value;
}
