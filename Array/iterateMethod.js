let _ = require('lodash');

function iteratee(method, ...args) {
  return (obj) => _[method](obj, ...args)
}

module.exports = iteratee;
