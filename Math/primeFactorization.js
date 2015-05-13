function primeFactor(num) {

  var primeList = [];
  var factor = 2;
  var maxFactor = Math.ceil(Math.sqrt(num));

  var check = function() {
    while (num%factor === 0) {
      primeList[primeList.length] = factor;
      num = num/factor;
    }
  };

  check();
  factor++;
  while(factor < maxFactor) {
    check();
    factor += 2;
  }
  if (num > 1)
  primeList[primeList.length] = num;
  return primeList;
}

console.log(primeFactor(process.argv.slice(2)));
