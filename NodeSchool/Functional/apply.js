var slice = Array.prototype.slice

function logger(namespace) {;
  return function () {
    var argv = slice.apply(arguments);
    argv.unshift(namespace);
    console.log.apply(null, argv);
  }
}

module.exports = logger
