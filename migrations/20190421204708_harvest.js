exports.up = (knex, Promise) => {
  return knex.schema.createTable('harvests', table => {
    table.text('id').primary()
    table.integer('plantCount').notNullable()
    table.integer('harvestGrams').notNullable()
    table.integer('totalPlantGrams').notNullable()
    table.string('classification', 3).notNullable()
    table.text('bay').notNullable()
    table.string('strain', 3).notNullable()
    table.string('date', 10).notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('harvests')
}
