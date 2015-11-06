function duckCount() {
  return (function checkQuack(argv, idx, result) {
    if (idx in argv) {
      if( Object.prototype.hasOwnProperty.call(argv[idx], 'quack') )
        result++;
      return checkQuack(argv, ++idx, result)
    }
      return result;
  })(arguments, 0, 0);
}

module.exports = duckCount
