const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

router.post('/', (req, res, next) => {
  const { email, password } = req.body

  if (email && password) {
    knex('users')
      .where('email', email)
      .then((result) => {
        if (result.length !== 1) {
          res.status(400).send('Bad email')
        }
        else if (bcrypt.compareSync(password, result[0].password)) {
          const payload = { email }
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
          res.status(200).json({ token })
        }
        else {
          res.status(400).send({ error: 'Bad password' })
        }
      })
  }
  else {
    res.status(400).send({ error: 'Email and/or password was not sent' })
  }
})

module.exports = router
