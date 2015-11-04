var express = require('express'),
    app = express(),
    port = process.argv[2],
    dir = process.argv[3],
    fs = require('fs');

app.get('/books', function(req, res) {
  fs.readFile(dir, function(err, data) {
    if(err) return res.sendStatus(500);
    data = JSON.parse(data);
    res.json(data);
  })
})
app.listen(port);
