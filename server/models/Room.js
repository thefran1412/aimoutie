const mongoose = require('mongoose')
const Schema = mongoose.Schema

var RoomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profileImg: {
    type: String,
    required: true
  },
  company: {
    type: Schema.ObjectId,
    ref: 'Companie'
  },
  desc: String,
  duration: {
    type: Number,
    required: true
  },
  minAge: Number,
  minPeople: Number,
  maxPeople: Number,
  difficulty: Number,
  price: Number,
  languages: Array,
  location: {
    lat: Number,
    long: Number,
    address: String,
    code: String,
    city: String,
    country: String
  },
  visible: Boolean,
  created: Date
})

module.exports = mongoose.model('Room', RoomSchema)
