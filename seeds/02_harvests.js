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
          date: '01/01/2019',
          harvestLbs: 0.4508928571,
          totalPlantLbs: 7.6116071429,
          percentHarvestedPlantWeight: 5.9237536651,
          lbsHarvestedPerSqFt: 0.0005273601,
          plantsPerLight: 9.4285714286,
          harvestLbsPerLight: 0.0080516582,
          sqFtPerPlant: 1.6193181818
        },
        {
          harvestId: getId(),
          plantCount: 492,
          harvestGrams: 195,
          totalPlantGrams: 2901,
          classification: 'MED',
          bay: 'sw857',
          strain: 'OGK',
          date: '02/03/2019',
          harvestLbs: 0.4352678571,
          totalPlantLbs: 6.4754464286,
          percentHarvestedPlantWeight: 6.7218200614,
          lbsHarvestedPerSqFt: 0.0004757026,
          plantsPerLight: 7.5692307692,
          harvestLbsPerLight: 0.0066964286,
          sqFtPerPlant: 1.8597560976
        },
        {
          harvestId: getId(),
          plantCount: 601,
          harvestGrams: 210,
          totalPlantGrams: 3611,
          classification: 'REC',
          bay: 'nw923',
          strain: 'BD',
          date: '02/12/2019',
          harvestLbs: 0.46875,
          totalPlantLbs: 8.0602678571,
          percentHarvestedPlantWeight: 5.8155635558,
          lbsHarvestedPerSqFt: 0.0006334459,
          plantsPerLight: 13.3555555556,
          harvestLbsPerLight: 0.0104166667,
          sqFtPerPlant: 1.231281198
        },
        {
          harvestId: getId(),
          plantCount: 398,
          harvestGrams: 219,
          totalPlantGrams: 3209,
          classification: 'REC',
          bay: 'se959',
          strain: 'GSC',
          date: '02/28/2019',
          harvestLbs: 0.4888392857,
          totalPlantLbs: 7.1629464286,
          percentHarvestedPlantWeight: 6.8245559362,
          lbsHarvestedPerSqFt: 0.0005875472,
          plantsPerLight: 7.5094339623,
          harvestLbsPerLight: 0.0092233827,
          sqFtPerPlant: 2.0904522613
        },
        {
          harvestId: getId(),
          plantCount: 120,
          harvestGrams: 98,
          totalPlantGrams: 1099,
          classification: 'REC',
          bay: 'se959',
          strain: 'SD',
          date: '03/11/2019',
          harvestLbs: 0.21875,
          totalPlantLbs: 2.453125,
          percentHarvestedPlantWeight: 8.9171974522,
          lbsHarvestedPerSqFt: 0.0002629207,
          plantsPerLight: 2.2641509434,
          harvestLbsPerLight: 0.0041273585,
          sqFtPerPlant: 6.9333333333
        }
      ])
    })
}

function getId() {
  return Math.random()
    .toString(36)
    .replace('0.', '')
}
