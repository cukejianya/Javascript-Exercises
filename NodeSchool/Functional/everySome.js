function checkUsersValid(goodUsers) {

  return function allUsersValid(submittedUsers) {
    var result = submittedUsers.every( function(a) {
      return goodUsers.some( function(b) {
        //console.log(b, a)
        return b.id === a.id;
      })
    })

    return result;
  };
}

module.exports = checkUsersValid
