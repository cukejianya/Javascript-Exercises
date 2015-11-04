var express = require('express'),
    crypto = require('crypto'),
    app = express(),
    url = process.argv[3],
    port = process.argv[2],
    date = new Date().toDateString();

app.put('/message/:ID', function(req, res) {
  var code = crypto
    .createHash('sha1')
    .update(date + req.params.ID)
    .digest('hex')
  res.end(code);
})

app.listen(port);
