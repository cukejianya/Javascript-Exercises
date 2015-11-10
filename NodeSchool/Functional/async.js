function loadUsers(userIds, load, done) {
  return done(userIds.reduce(function(users, a) {
      console.log(a)
      return load(a);
    }, []))
}

module.exports = loadUsers
