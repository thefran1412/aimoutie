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

export {getData, getRooms}
