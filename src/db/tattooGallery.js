const connection = require('./connection')

function getGallery(db = connection) {
    const gallery = db('tattooGallery').select()
    return gallery
}

module.exports = {
    getGallery
}