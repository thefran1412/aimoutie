const mongoose = require('mongoose')
const Schema = mongoose.Schema

// types of user: normal, admin, company

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  surname: String,
  token: String,
  userType: String,
  friends: []
})

module.exports = mongoose.model('User', UserSchema)
