exports.up = (knex, Promise) => (
  knex.schema.createTable('todo', (table) => {
    table.increments()
    table.varchar('item', 255)
    table.integer('user_id').unsigned().notNullable()

    table.foreign('user_id').references('id').inTable('users')
  })
)

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('todo')
