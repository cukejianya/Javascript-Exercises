var uniq = require('uniq')

var str = prompt();

str = uniq(str.split(','));

console.log(str);
