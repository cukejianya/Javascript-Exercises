module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(retarr, elm) {
    retarr.push(fn(elm));
    return retarr;
  }, [])
}
