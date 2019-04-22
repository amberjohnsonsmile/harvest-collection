exports.seed = function(knex, Promise) {
  return knex('harvests')
    .del()
    .then(function() {
      return knex('harvests').insert([
        {
          harvestId: getId(),
          plantCount: 528,
          harvestGrams: 202,
          totalPlantGrams: 3410,
          classification: 'REC',
          bay: 'nw615',
          strain: 'PEX',
          date: getDate()
        },
        {
          harvestId: getId(),
          plantCount: 492,
          harvestGrams: 195,
          totalPlantGrams: 2901,
          classification: 'MED',
          bay: 'sw857',
          strain: 'OGK',
          date: getDate()
        },
        {
          harvestId: getId(),
          plantCount: 601,
          harvestGrams: 210,
          totalPlantGrams: 3611,
          classification: 'REC',
          bay: 'nw923',
          strain: 'BD',
          date: getDate()
        },
        {
          harvestId: getId(),
          plantCount: 398,
          harvestGrams: 219,
          totalPlantGrams: 3209,
          classification: 'REC',
          bay: 'se959',
          strain: 'GSC',
          date: getDate()
        },
        {
          harvestId: getId(),
          plantCount: 120,
          harvestGrams: 98,
          totalPlantGrams: 1099,
          classification: 'REC',
          bay: 'se959',
          strain: 'SD',
          date: getDate()
        }
      ])
    })
}

function getId() {
  return Math.random()
    .toString(36)
    .replace('0.', '')
}

function getDate() {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1

  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return mm + '/' + dd + '/' + yyyy
}
