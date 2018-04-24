// function protect(req, res, next) {
//   console.log(req.headers)
// }
//
// module.exports = protect

function protect(req, res, next) {
  const { authorization } = req.headers

  if (authorization) {
    next()
  }
  else {
    res.status(403).send('Unauthorized')
  }
}

module.exports = protect
