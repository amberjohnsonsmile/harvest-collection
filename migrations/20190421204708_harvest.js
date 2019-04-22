exports.up = (knex, Promise) => {
  return knex.schema.createTable('harvests', table => {
    table.text('harvestId').primary()
    table.integer('plantCount').notNullable()
    table.integer('harvestGrams').notNullable()
    table.integer('totalPlantGrams').notNullable()
    table.string('classification', 3).notNullable()
    table.text('bay').notNullable()
    table.string('strain', 3).notNullable()
    table.string('date', 10).notNullable()
    table.decimal('harvestLbs', null, 10).notNullable()
    table.decimal('totalPlantLbs', null, 10).notNullable()
    table.decimal('percentHarvestedPlantWeight', null, 10).notNullable()
    table.decimal('lbsHarvestedPerSqFt', null, 10).notNullable()
    table.decimal('plantsPerLight', null, 10).notNullable()
    table.decimal('harvestLbsPerLight', null, 10).notNullable()
    table.decimal('sqFtPerPlant', null, 10).notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('harvests')
}
