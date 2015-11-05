function countWords(inputWords) {
  return inputWords.reduce( function(dict, elm) {
    dict[elm] = ++dict[elm] || 1;
    return dict
  }, {});
}

module.exports = countWords
