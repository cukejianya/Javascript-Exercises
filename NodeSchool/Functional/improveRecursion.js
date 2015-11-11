function getDependencies(fn, tree) {

}

function trampoline(fn){
  while(fn && fn instanceOf Function){
    fn =  fn();
  }
  return fn();
}
module.exports = getDependencies
