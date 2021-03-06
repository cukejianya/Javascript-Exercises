var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', path.join( path.dirname() + '/views'));
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false}));

require('babel/register')({
  ignore: false
});
var data = [{title: "Shopping", detail: process.argv[3]}, {title: "Hair cut", detail: process.argv[4]}];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});
