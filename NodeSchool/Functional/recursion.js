var util = require('util');
function reduce(arr, fn, initial) {
  if ( 0 < arr.length ) {
    return reduce(arr.slice(1, arr.length), fn, fn(initial, arr[0]))
  } else {
    return initial;
  }
}

module.exports = reduce;
