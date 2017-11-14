// const Task = require('../../models/Task.js')

module.exports = function (req, res) {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err))
}
