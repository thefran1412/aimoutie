const express = require('express')
let bodyParser = require('body-parser')

const router = express.Router()
const getRooms = require('./handlers/getRooms')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.route('/rooms')
  .get(getRooms)

module.exports = router
