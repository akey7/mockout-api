exports.seed = (knex, Promise) => (
  knex('todo').del()
    .then(() => (
      knex('todo').insert([{
        id: 1,
        item: 'Make it work.',
        user_id: 1
      }])
    ))
    .then(() => knex.raw(`SELECT setval('todo_id_seq', (SELECT MAX(id) FROM todo));`))
)
