function formatHarvests(harvests, queryParams) {
  return harvests.map(harvest => {
    return {
      id: harvest.harvestId,
      plantCount: harvest.plantCount,
      harvestGrams: harvest.harvestGrams,
      totalPlantGrams: harvest.totalPlantGrams,
      classification: harvest.classification,
      bay: harvest.bay,
      strain: harvest.strain,
      date: harvest.date,
      harvestLbs: Number(harvest.harvestLbs),
      totalPlantLbs: Number(harvest.totalPlantLbs),
      percentHarvestedPlantWeight: Number(harvest.percentHarvestedPlantWeight),
      lbsHarvestedPerSqFt: Number(harvest.lbsHarvestedPerSqFt),
      plantsPerLight: Number(harvest.plantsPerLight),
      harvestLbsPerLight: Number(harvest.harvestLbsPerLight),
      sqFtPerPlant: Number(harvest.sqFtPerPlant)
    }
  })
}

function prepareHarvest(harvest, bay) {
  const harvestLbs = convertToPounds(harvest.harvestGrams)
  const totalPlantLbs = convertToPounds(harvest.totalPlantGrams)

  return {
    harvestId: getId(),
    plantCount: harvest.plantCount,
    harvestGrams: harvest.harvestGrams,
    totalPlantGrams: harvest.totalPlantGrams,
    classification: harvest.classification,
    bay: harvest.bay.replace(/\W/g, '').toLowerCase(),
    strain: harvest.strain.toUpperCase(),
    date: getDate(),
    harvestLbs,
    totalPlantLbs,
    percentHarvestedPlantWeight: (harvestLbs / totalPlantLbs) * 100,
    lbsHarvestedPerSqFt: harvestLbs / bay.squareFootage,
    plantsPerLight: harvest.plantCount / bay.lightCount,
    harvestLbsPerLight: harvestLbs / bay.lightCount,
    sqFtPerPlant: bay.squareFootage / harvest.plantCount
  }
}

function convertToPounds(grams) {
  return Number((grams / 448).toFixed(10))
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

module.exports = { getId, formatHarvests, prepareHarvest }
