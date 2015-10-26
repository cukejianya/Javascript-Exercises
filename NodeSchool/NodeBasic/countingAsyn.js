var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2,5);
var results = {};
var count = 3;
urls.forEach(function(url) {
  http.get(url, function(res) {
    res.pipe(bl(function (err, data){

      if (err) return console.error(err);

      var data = data.toString();
      count--;
      results[url] = data;

      if (count<=0) {
        urls.forEach(function(a) {
          console.log(results[a]);
        })
      }

    }))
  })
});
