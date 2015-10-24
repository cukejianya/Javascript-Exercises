console.log(process.argv.slice(2).map(function(a) { return parseInt(a)}).reduce( function (a, b) {
  return a + b;
}));
