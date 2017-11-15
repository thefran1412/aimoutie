const express = require('express')
let bodyParser = require('body-parser')

const app = express()

const room = require('./room')
const companie = require('./companie')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(room)
app.use(companie)

module.exports = app
