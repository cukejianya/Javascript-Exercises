function repeat(callback, num) {
  for(i = 0; i < num; i++) {
    return callback();
  }
}

module.exports = repeat;
