const User = require('../../../../models/User.js')

function login (req, res) {
  const {username, password} = req.body

  User.logIn(username, password, (err, data) => {
    if (err) throw err
    if (!data.success) {
      res.status(500).json(data)
    } else {
      res.status(200).json(data)
    }
  })
}

module.exports = login
