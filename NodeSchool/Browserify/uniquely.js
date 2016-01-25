var uniq = require('uniq');

module.exports = function() {
  var str = prompt();
  str = uniq(str.split(','));

  console.log(str);
}
