var express = require('express');
var path = require('path');
var app = express();
var port = process.argv[2];
var url = process.argv[3] || path.join(__dirname, + 'public');

app.use(express.static(url));

app.listen(port)
