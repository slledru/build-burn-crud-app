exports.up = (knex, Promise) => {
  return knex.schema.createTable('offer', (table) => {
    table.increments()
    table.varchar('name', 255)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('offer')
}
