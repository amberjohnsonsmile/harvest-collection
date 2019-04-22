function formatHarvests(harvests) {
  return harvests.map(harvest => {
    return {
      id: harvest.id,
      plantCount: harvest.plantCount,
      harvestGrams: harvest.harvestGrams,
      totalPlantGrams: harvest.totalPlantGrams,
      classification: harvest.classification,
      bay: harvest.bay,
      strain: harvest.strain,
      date: harvest.date,
      harvestLbs: 0.4508928571,
      totalPlantLbs: 7.6116071429,
      percentHarvestedPlantWeight: 5.923753666,
      lbsHarvestedPerSqFt: 0.008318696331,
      plantsPerLight: 9.4285714286,
      harvestLbsPerLight: 0.008051658162,
      sqFtPerPlant: 0.5770491803
    }
  })
}

module.exports = formatHarvests
