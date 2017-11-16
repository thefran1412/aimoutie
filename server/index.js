const express = require('express')
const server = express()

/* MIDDLEWARES */

const passport = require('passport')
const bodyParser = require('body-parser')
const expressSession = require('./middlewares/expressSession.js')
const expressValidator = require('./middlewares/expressValidator.js')
const globalVars = require('./middlewares/globalVars.js')

server.use(passport.initialize())
server.use(passport.session())

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(expressSession)
server.use(expressValidator)
server.use(globalVars)

/* ROUTES */

const api = require('./router/api')
// const front = require('./router/front')

server.use('/static', express.static('public'))
server.use('/api', api)

// server.use('/', front)

module.exports = server
