function userExists(email) {
  return db('users')
    .where('email', email)
    .then((usersFound) => usersFound.length > 0)
}

function getUser(id) {
  return db('users').select('username').where('auth0_id', id).first()
}

function createUser(user) {
  return db('users').insert(user)
    
}
module.exports = {
  userExists,
  getUser,
  createUser,
}