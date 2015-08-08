String.prototype.repeatify = String.prototype.repeatify || function(num) {
  var str = '';
  for(var i = 0; i < num; i++) {
    str += this.valueOf();
  }
  return str;
};

var numArg = parseInt(process.argv.slice(2));

console.log('hello'.repeatify(numArg));
