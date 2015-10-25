var fs = require('fs');
var path = require('path');

function fsfilter(dir_name, ext, callback) {

  ext = '.'+ ext
  fs.readdir(dir_name, function doneReading(err, dir) {
    if (err)  return callback(err);

    dir = dir.filter( function (a) { return path.extname(a) === ext;})
    callback(null, dir);
  })
}

module.exports =  fsfilter;
