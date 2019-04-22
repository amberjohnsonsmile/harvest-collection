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
    .getHarvest()
    .then(data => {
      response.json({harvests: utility.formatHarvests(data)})
    })
    .catch(error => next(error))
})

app.post('/harvests', (request, response, next) => {
  response.json({message: 'It works!'})
})

app.use((error, request, response, next) => {
  response.status(500).json({error: error.message.replace(/"/g, "'")})
})

app.listen(process.env.PORT || 3000)

module.exports = app
