const express = require('express')

const server = express()

/* MIDDLEWARES */
const useless = require('./middlewares/useless.js')

server.use(useless)

/* ROUTES */
const api = require('./router/api/index.js')

server.use('/static', express.static('public'))
server.use('/api', api)

module.exports = server
