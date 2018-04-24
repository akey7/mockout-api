exports.up = (knex, Promise) => (
  knex.schema.createTable('users', (table) => {
    table.increments()
    table.varchar('username', 255)
    table.varchar('password', 255)
  })
)

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users')
