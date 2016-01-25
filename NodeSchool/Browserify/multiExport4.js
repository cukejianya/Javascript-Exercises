var parse = require('./ndjson').parse;
var stringify = require('./ndjson').stringify;

var str = prompt();
var rows = prompt();
console.log(parse(str));
console.log(stringify(rows));
