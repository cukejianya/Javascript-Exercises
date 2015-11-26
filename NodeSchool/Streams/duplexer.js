var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
  var child = spawn(cmd, args);
  var duplex = duplexer(child.stdin, child.stdout);
  return duplex;
};
