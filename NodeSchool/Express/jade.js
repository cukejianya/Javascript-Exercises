var express = require('express');
var path = require('path');
var app = express();
var port = process.argv[2];

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(port);
