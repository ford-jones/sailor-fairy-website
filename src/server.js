
const path = require('path')
const express = require('express')
const server = express()
const flashRoute = require('./routes/flash')
const galleryRoute = require('./routes/tattooGallery')
const imageRoute = require('./routes/images')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/flash', flashRoute)
server.use('/api/v1/gallery', galleryRoute)
server.use('/api/v1/images', imageRoute)

server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })


module.exports = server