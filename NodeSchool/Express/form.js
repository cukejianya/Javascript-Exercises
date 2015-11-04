var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
  var reverse = req.body.str.split('').reverse().join('');
  //console.log(reverse);
  res.send(reverse);
}).listen(port);
