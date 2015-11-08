function Spy(target, method) {
  var object = {count: 0};
  var oldMethod = target[method];
  target[method] = function() {
    var arg = Array.prototype.slice.call(arguments);
    object.count++
    return oldMethod.apply(this, arg);
  }
  return object
}

module.exports = Spy;
