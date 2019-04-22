const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(config)

function getHarvest() {
  const query = database('harvests')
    .join('bays', 'harvests.bay', 'bays.id')
    .select('*')
  return query
}

function createHarvest(body) {
  return database('harvests')
    .insert(body)
    .returning('*')
}

module.exports = {
  createHarvest,
  getHarvest
}
