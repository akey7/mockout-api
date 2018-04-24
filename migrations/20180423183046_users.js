exports.up = (knex, Promise) => (
  knex.schema.createTable('users', (table) => {
    table.increments()
    table.varchar('email', 255)
    table.varchar('password', 255)
    table.boolean('is_admin')
  })
)

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users')
