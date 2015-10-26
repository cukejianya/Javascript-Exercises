var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function (err, data) {
    if(err) return console.error(err);
    data = data.toString();
    numOfChar = data.length;
    console.log(numOfChar);
    console.log(data.toString());
  }))
})
