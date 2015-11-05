function getShortMessages(messages) {
  var result = messages
      .filter( function(a) {
        return a.message.length < 50;
      })
      .map( function(a) {
        return a.message;
      })

  return result;
}

module.exports = getShortMessages
