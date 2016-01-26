var url = require('url');
var querystring = require('querystring');

var addr = prompt();
var query = url.parse(addr).query;
var file = querystring.parse(query).file;
result = url.resolve(addr, file)
console.log(result);
