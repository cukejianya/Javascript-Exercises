function primeFactor(num) {
    var primeFactorList = [];
    var get = require("./sieveOfEratosthenes.js");
    var prime;
    var primeList = get.findAllPrimes(num);

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

console.log(primeFactor(process.argv.slice(2)));
