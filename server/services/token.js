const jwt = require('')
module.exports.generateToken = (info, callback) => {
  const token = jwt.sign({
    data: info
  }, 'secretword')
  return token
}

module.exports.checkToken = (token, callback) => {
  jwt.verify(token, 'secretword', (err, decoded) => {
    if (err) throw err
    console.log(decoded)
  })
}
