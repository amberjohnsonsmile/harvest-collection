exports.up = (knex, Promise) => {
  return knex.schema.createTable('bays', table => {
    table.text('id').primary()
    table.integer('lightCount').notNullable()
    table.integer('squareFootage').notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('bays')
}
