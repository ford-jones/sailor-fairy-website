const knex = require('knex')
const config = require('./knexfile')
require('dotenv').config()

const env = process.env.NODE_ENV
const connection = knex(config[env])

module.exports = connection