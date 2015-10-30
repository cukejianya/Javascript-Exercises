var findAllPrimes = require("./sieveOfEratosthenes.js");

function primeFactor(num) {
    var primeFactorList = [];
    var prime;
    var primeList = findAllPrimes(num);

    for (var x in primeList) {
        prime = primeList[x];
        while (num%prime === 0) {
          primeFactorList.push(prime);
          num = num/prime;
        }
        if (num === 1) {
            break;
        }
    }

    return primeFactorList;
}

exports = primeFactor;


if (module.parent) {
  console.log("Prime Factorization:",primeFactor(process.argv.slice(2)));
}
