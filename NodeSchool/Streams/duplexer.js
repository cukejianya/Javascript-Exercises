var spawn = require('child_process').spawn;
var duplex = require('stream').Duplex;
var util = require('util');

util.inherits(Duplexer, duplex);

function Duplexer(writable, readable) {
  duplex.call(this);

  var self = this;

  this._writable = writable;
  this._readable = readable;
  this._waiting = false;

  this.on('end', function(){
    this.stdin.pause();
  }):

  if (typeof readable.read !== "function") {
    readable = (new stream.Readable(options)).wrap(readable);
  }

  readable.on('readable', function() {
    if(self._waiting) {
      writable.end();
      self._read();
    }
  });
  readable.once('end', function() {
    self.push(null);
  });

  writable.once('finish', function() {
    self.end();
  });


}

Duplexer.prototype._read = function _read(n)  {
  this._readable.read(n);
}
Duplexer.prototype._write = function _write(input, encoding, done) {
  this._writable.write(input, encoding, done);
}
module.exports = function (cmd, args) {
  var child = spawn(cmd, args);
  var duplexer = new Duplexer(child.stdin, child.stdout);

  return duplexer;
};
