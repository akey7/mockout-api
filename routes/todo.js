const express = require('express')
const router = express.Router()
const knex = require('../knex')

// By the time the request gets here, we can trust the username
router.get('/', (req, res, next) => {
  const { userId } = req
  knex('todo')
    .select('id', 'item')
    .where('user_id', userId)
    .then((result) => res.json(result))
})

module.exports = router
