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

router.get('/:id', (req, res, next) => {
  const { userId } = req
  const { id } = req.params

  knex('todo')
    .select('id', 'item')
    .where('user_id', userId)
    .andWhere('id', id)
    .then((result) => {
      if (result.length > 0) {
        res.json(result)
      }
      else {
        res.status(404).json({ error: `Item ${id} not found` })
      }
    })
})

module.exports = router
