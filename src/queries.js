const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(config)

function getHarvests(queryParams) {
  const sortColumn = queryParams.sort_by ? queryParams.sort_by : 'date'
  const order = queryParams.order ? queryParams.order : 'desc'

  const query = database('harvests')
    .join('bays', 'harvests.bay', 'bays.id')
    .select('*')
    .orderBy(sortColumn, order)

  if (queryParams.bay) query.where('bay', queryParams.bay)
  if (queryParams.strain)
    query.where('strain', queryParams.strain.toUpperCase())

  return query
}

function createHarvest(body) {
  return database('harvests')
    .insert(body)
    .returning('*')
}

module.exports = {
  createHarvest,
  getHarvests
}
