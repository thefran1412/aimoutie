const mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

// types of user: normal, admin, company

var UserSchema = new Schema({
  username: {
    type: String,
    index: true,
    unique: true
  },
  password: String,
  email: {
    type: String,
    unique: true
  },
  name: String,
  userType: String,
  token: String,
  friends: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  saved: [{
    type: Schema.ObjectId,
    ref: 'Room'
  }],
  created: Date
})

var User = module.exports = mongoose.model('User', UserSchema)

module.exports.register = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err
      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.getUserByUsername = (username, callback) => {
  var query = {username: username}
  User.findOne(query, callback)
}

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback)
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
  })
}
