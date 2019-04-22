const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const queries = require('./queries')
const utility = require('./utility')

app.use(bodyParser.json())
app.use(cors())

app.get('/harvests', (request, response, next) => {
  queries
    .getHarvests(request.query)
    .then(data => {
      response.json({ harvests: utility.formatHarvests(data) })
    })
    .catch(error => next(error))
})

app.post('/harvests', (request, response, next) => {
  queries
    .getBay(request.body.bay)
    .then(bay => {
      return queries.createHarvest(request.body, bay)
    })
    .then(data => {
      response.json({ harvest: utility.formatHarvests(data)[0] })
    })
    .catch(error => next(error))
})

app.use((error, request, response, next) => {
  response.status(500).json({ error: error.message.replace(/"/g, "'") })
})

app.listen(process.env.PORT || 3000)

module.exports = app
