var num = parseInt(process.argv[2]);
var gcd = require('./gcd');

function phiFunction(num) {
  var rrsModulo = []
  for (var i = 1; i < num; i++) {
    if (gcd(i, num) == 1) {
      rrsModulo.push(i);
    }
  }
  return rrsModulo
}

var phi = phiFunction(num)


console.log("phiFunction of %d: %d",num, phi.length);
console.log("Reduced Residue System Modulo: ", phi.toString());
