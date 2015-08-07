function happyNumbers(num) {
  num +='';
  if (num === '1') {
    return 'its a happy number';
  } else if (num.length < 2) {
    return 'Number is too sad.';
  }
  num = num.split('')
    .map(function(a) { return parseInt(a); })
    .reduce( function(a, b) {return a+b;} );
  return happyNumbers(num);
}

var a = parseInt(process.argv.slice(2));

console.log(happyNumbers(a));
