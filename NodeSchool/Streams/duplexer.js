var spawn = require('child_process').spawn;
var duplex = require('stream').Duplex;
var util = require('util');
var dx = require('duplexer')

util.inherits(Duplexer, duplex);

function Duplexer(writable, readable) {
  duplex.call(this);
  this._writable = writable;
  this._readable = readable;

}

Duplexer.prototype._read = function _read(n)  {
  return this._readable.read(n);
}
Duplexer.prototype._write = function _write(input, encoding, done) {
  return this._writable.write(input, encoding, done);
}

module.exports = function (cmd, args) {
  var child = spawn(cmd, args);
  var duplexer = new Duplexer(child.stdin, child.stdout);

  return dx(child.stdin, child.stdout);
};
