const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
require('dotenv').config()

const domain = process.env.REACT_APP_AUTH_DOMAIN
const audience = process.env.REACT_APP_AUTH_AUDIENCE

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt