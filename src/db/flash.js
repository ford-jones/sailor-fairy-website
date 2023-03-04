const connection = require('./connection')

function getFlash(db = connection) {
    const flash = db('flash').select()
    return flash
}

module.exports = {
    getFlash
}