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

function convertToPounds(grams) {
  return Number((grams / 448).toFixed(10))
}

module.exports = formatHarvests
