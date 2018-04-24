const jwt = require('jsonwebtoken')
require('dotenv').config()

// NOTE: THIS IS PRONE TO SESSION HIJACKING for the duration of the JWT
// Ideally you would re-issue the key on each use.

function protect(req, res, next) {
  const { authorization } = req.headers

  try {
    if (!authorization) {
      throw new Error('Authorization header not found')
    }
    const authParsed = authorization.split(' ')
    if (authParsed.length !== 2) {
      throw new Error('Authorization header is corrupt')
    }
    jwt.verify(authParsed[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new Error('JWT token is invalid')
      }
      else {
        req.username = decoded.username
        req.userId = decoded.userId
        next()
      }
    })
  }
  catch (error) {
    res.status(403).json({ error })
  }
}

module.exports = protect
