import axios from 'axios'

function getData (url, callback) {
  axios.get(url)
    .then(callback)
}

// function postData () {
// }
// function putData () {
// }
// function deleteData () {
// }

function getRooms (filter, callback) {
  axios.get('/api/rooms')
    .then(callback)
}

function getRoom (id, filter, callback) {
  axios.get(`/api/room/${id}`)
    .then(callback)
}

export {getData, getRooms, getRoom}
