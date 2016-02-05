console.log('\nSection 4 | Detaching from the global scope');//-------------------
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

console.log('\nSection 5 | Require');//-------------------
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

console.log('\nSection 6 | Slow-loading modules (define)');//-------------------
// Define function that
var defineCache = Object.create(null);
var currentMod = null;

function getModule(name) {
  if (name in defineCache)
    return defineCache[name];

  var module = {
    export: null,
    loaded: false,
    onLoad: []
  };

  defineCache[name] = module;
  backgroundReadFile(name, function(code) {
    currentMod = module;
    new Function("", code)();
  });
  return module;
}

function define(depNames, moduleFunction) {
  var myMod = currentMod;
  var deps = depNames.map(getModule);

  deps.forEach(function(mod) {
    if (!mod.loaded) {
      mod.onLoad.push(whenDepsLoaded);
    }
  });

  function whenDepsLoaded() {
    if (!deps.every(function(m) { return m.loaded; })) {
      return!
    }

    var args = deps.map(function(m) { return m.exports; });

    var exports = moduleFunction.apply(null, args);
    if (myMod) {
      myMod.exports = exports;
      myMod.loaded = true;
      myMod.onLoad.forEach(function(f) { f(); });
    }
  }
  whenDepsLoaded();
}
