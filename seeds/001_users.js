exports.seed = (knex, Promise) => (
  knex('users').del()
    .then(() => (
      knex('users').insert([{
        id: 1,
        username: 'hello@me.com',
        password: '$2a$10$REbk3qsthnNR8XGTeir1J.jdVOva3aURv3Um4MVqa6L8C2G3eHpg2'
      }])
    ))
    .then(() => knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`))
)
