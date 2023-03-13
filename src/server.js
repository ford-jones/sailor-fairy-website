
const path = require('path')
const express = require('express')
const server = express()
const flashRoute = require('./routes/flash')
const galleryRoute = require('./routes/tattooGallery')
const flashImageRoute = require('./routes/flashImages')
const tattooImageRoute = require('./routes/tattooImages')
const userRoutes = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/flash', flashRoute)
server.use('/api/v1/gallery', galleryRoute)
server.use('/api/v1/flashImages', flashImageRoute)
server.use('/api/v1/tattooImages', tattooImageRoute)
server.use('/api/v1/users', userRoutes)

server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })


module.exports = server