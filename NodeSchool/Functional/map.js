function doubleAll(numbers) {
  var results = numbers.map( function(a) {
    return a * 2;
  })
  return results;
}
 module.exports = doubleAll;
