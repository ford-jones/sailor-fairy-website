const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const filePath = path.resolve(__dirname, '../' + 'public/images/flash')

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${filePath}`)
  },
  filename: (req, file, cb) => cb(null, `${file.originalname}`),
})

const fileUpload = multer({ storage: storageEngine })

router.post('/', fileUpload.single('image'), (req, res) => {
  res.sendStatus(201)
})

module.exports = router