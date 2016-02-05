(function(exports) {
  var names = [" Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday "];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(global.weekDay = {});

console.log(global.weekDay.name(global.weekDay.number("Saturday")));
console.log(global.weekDay);

//How require works some what
/*
  function require(name) {
    var code = new Function("exports", readFile(name));
    var exports= {}
    code(exports);
    return exports;
  }
*/
//Problem one: load and run every time it is required
//Problem two: Module can only return export object and not any other value


//CommonJS modules
function require(name) {
  if (name in reqire.cache) {
    return require.cache[name];
  }

  var code = new Function("exports, module", readFile(name));
  var exports = {}, module = {exports: exports};
  code(exports, module);

  require.cache[name] = module.exports;

  return module.exports;
}

require.cache = Object.creat(null);
