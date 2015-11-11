function getDependencies(tree) {
  return Object.keys(reduceFn(tree, {})).sort();
}

function reduceFn(parentNode, dict) {
  if (parentNode && parentNode.dependencies instanceof Object)
    var depArr = Object.keys(parentNode.dependencies)
  else return dict
  return depArr.reduce(function theFn(dict, a, idx) {
    var newNode = parentNode.dependencies[a]
    if (!dict[a+'@'+newNode.version])
      dict[a+'@'+newNode.version] = true;
    if (newNode.dependencies) {
      reduceFn(newNode, dict);
    }
    return dict;
  }, dict);
}

module.exports = getDependencies

//The official Solution. This code is so much cleaner!
/*
function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
*/
