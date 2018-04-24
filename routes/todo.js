const express = require('express')
const router = express.Router()

// By the time the request gets here, we can trust the username
router.get('/', (req, res, next) => {
  res.json({ todo: 'list' })
})

module.exports = router
