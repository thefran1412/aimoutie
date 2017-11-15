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

export {getData}
