var phifunc = require('./phiFunction');

var p = console.log

function primitiveRoot(num) {
  var rss = phifunc(num);
  var phi = rss.length;
  rss.shift();

  var roots = rss.filter(function(a){
    for(var i = 1; i <= phi; i++) {
      var mod = Math.pow(a,i) % num;
      if (mod === 1) break;
    }
    if(i === phi) return true; else return false;
  })

  return roots;
}

module.exports = primitiveRoot;

if (!module.parent) {
  var num = parseInt(process.argv[2]);
  var roots = primitiveRoot(num).join(', ') || 'None';
  console.log('Primitive Root(s): '+roots);
}
