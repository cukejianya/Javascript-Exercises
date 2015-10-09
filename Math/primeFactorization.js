function primeFactor(num) {

  var primeFactorList = [];
  var factor = 2;
  var maxFactor = Math.ceil(Math.sqrt(num));
  var primeList = require("./sieveOfEratosthenes.js");

  primeList = primeList(maxFactor);

  var check = function() {
    while (num%factor === 0) {
      primeFactorList.push(factor);
      num = num/factor;
    }
  };

  check();
  factor++;
 for (var factor = 3; factor < maxFactor; factor) {
    check();
    factor += 2;
  }
  if (num > 1)
  primeFactorList[primeFactorList.length] = num;
  return primeFactorList;
}

console.log(primeFactor(process.argv.slice(2)));
