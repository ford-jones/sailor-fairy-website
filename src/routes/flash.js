const express = require('express')
const router = express.Router()
const path = require('path')
const db = require('../db/flash')
const fs = require('fs')

router.get('/', (req, res) => {
    db.getFlash()
    .then((data) => {
        res.json({images: data.map((image) => image)})
    })
    .catch((err) => {
        console.error(err.message)
    })
})

router.post('/', (req, res) => {
    const data = req.body
    db.postFlash(data)
})

router.delete('/', (req, res) => {
    const flash = req.body
    const filePath = path.resolve(__dirname, '../' + 'public/images/flash')
    
    db.deleteFlash(flash)
    .then(() => {
        res.sendStatus(201)
        return null
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(500).json({ message: 'something went wrong' })
      })
    fs.unlinkSync(`${filePath}/${flash.Filename}`)
  })

module.exports = router