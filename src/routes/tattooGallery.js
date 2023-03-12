const express = require('express')
const router = express.Router()
const db = require('../db/tattooGallery')

router.get('/', (req, res) => {
    db.getGallery()
    .then((data) => {
        res.json({images: data.map((image) => image)})
    })
    .catch((err) => {
        console.error(err.message)
    })
})

router.post('/', (req, res) => {
    const data = req.body
    db.postTattoo(data)
})

module.exports = router