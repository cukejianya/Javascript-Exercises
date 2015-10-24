var fs = require('fs');
var path = require('path');
var extension ="."+process.argv[3]
fs.readdir(process.argv[2], function(err, dir) {
  if (err) throw err;
  dir_filter = dir.filter(function (a) {
    return path.extname(a) === extension;
  }).forEach(function(a) { console.log(a) });
})
