const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const queries = require('./queries')
const formatHarvests = require('./utility')

app.use(bodyParser.json())
app.use(cors())

app.get('/harvests', (request, response, next) => {
  const queryParams = {
    bay: request.query.bay,
    order: request.query.order,
    sortBy: request.query.sort_by,
    strain: request.query.strain
  }
  // strain
  // Limit response to provided strain Example: PEX.
  // String
  // bay
  // Limit response to provided bay ID Example: nw615.
  // String
  // sort_by
  // One of date, harvestLbs, percentHarvestedPlantWeight, lbsHarvestedPerSqFt or sqFtPerPlant Default: date.
  // String
  // order
  // ASC or DESC Default: DESC.
  // String
  queries
    .getHarvest(queryParams)
    .then(data => {
      response.json({ harvests: formatHarvests(data, queryParams) })
    })
    .catch(error => next(error))
})

app.post('/harvests', (request, response, next) => {
  response.json({ message: 'It works!' })
})

app.use((error, request, response, next) => {
  response.status(500).json({ error: error.message.replace(/"/g, "'") })
})

app.listen(process.env.PORT || 3000)

module.exports = app
