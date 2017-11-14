const mongoose = require('mongoose')
const Schema = mongoose.Schema

var RoomSchema = new Schema({
  name: String,
  companyId: String,
  created: Number,
  profileImg: String,
  coverImg: String,
  description: String,
  duration: Number,
  minAge: Number,
  minPeople: Number,
  maxPeople: Number,
  difficulty: Number,
  price: Number,
  languages: [],
  location: {
    lat: Number,
    long: Number,
    address: String,
    code: Number,
    City: String
  },
  visible: Boolean
})

module.exports = mongoose.model('Room', RoomSchema)
