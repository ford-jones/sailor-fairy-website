const express = require('express')
const checkJwt = require('../auth0')

const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  const auth0_id = req.user?.sub

  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

router.post('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  const { email } = req.body
  const userDetails = {
    auth0_id,
    email,
  }

  db.userExists(email)
    .then((emailTaken) => {
      if (emailTaken) throw new Error('This email already exists.')
    })
    .then(() => db.createUser(userDetails))
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err)
      if (err.message === 'This email already exists.') {
        res.status(403).send('This email already exists.')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router