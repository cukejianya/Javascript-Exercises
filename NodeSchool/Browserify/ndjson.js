module.exports = {
  parse: function(str) {
    return str.split('\n').map(JSON.parse);
  },
  stringify: function(row) {
    return row.map(JSON.stringify).join('\n')
  }
}
