const chai = require('chai')
const chaiHttp = require('chai-http')
const queries = require('../src/queries')
const app = require('../src/app')
const assert = chai.assert
chai.use(chaiHttp)

describe('endpoints', () => {
  const harvest = {
    plantCount: 303,
    harvestGrams: 100,
    totalPlantGrams: 2401,
    classification: 'REC',
    bay: 'se-959',
    strain: 'GC'
  }

  it('can add a new harvest', done => {
    chai
      .request(app)
      .post('/harvests')
      .send(harvest)
      .end((error, response) => {
        assert.equal(
          response.status,
          201,
          'Response should have a 201 CREATED status'
        )
        assert.equal(
          response.body.plantCount,
          303,
          'Correct plantCount should be returend'
        )
        assert.equal(
          response.body.totalPlantLbs,
          5.359375,
          'Newly created totalPlantLbs field should be returned'
        )
        done()
      })
  })

  it('can fetch harvests', done => {
    chai
      .request(app)
      .get(
        '/harvests?bay=se959&sort=percentHarvestedPlantWeight&order=asc&strain=gsc'
      )
      .end((error, response) => {
        assert.equal(
          response.status,
          200,
          'Response should have a 200 OK status'
        )
        assert.equal(
          response.body.harvests.length,
          2,
          'Only two results should be returned'
        )
        assert.equal(
          response.body.harvests[0].percentHarvestedPlantWeight,
          6.8245559362,
          'Should return the lowest percent harvested first'
        )
        done()
      })
  })
})
