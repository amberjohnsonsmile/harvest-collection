function formatHarvests(harvests, queryParams) {
  const harvestList = harvests.map(harvest => {
    const harvestLbs = convertToPounds(harvest.harvestGrams)
    const totalPlantLbs = convertToPounds(harvest.totalPlantGrams)

    return {
      id: harvest.harvestId,
      plantCount: harvest.plantCount,
      harvestGrams: harvest.harvestGrams,
      totalPlantGrams: harvest.totalPlantGrams,
      classification: harvest.classification,
      bay: harvest.bay,
      strain: harvest.strain,
      date: harvest.date,
      harvestLbs,
      totalPlantLbs,
      percentHarvestedPlantWeight: Number(
        ((harvestLbs / totalPlantLbs) * 100).toFixed(10)
      ),
      lbsHarvestedPerSqFt: Number(
        (harvestLbs / harvest.squareFootage).toFixed(10)
      ),
      plantsPerLight: Number(
        (harvest.plantCount / harvest.lightCount).toFixed(10)
      ),
      harvestLbsPerLight: Number((harvestLbs / harvest.lightCount).toFixed(10)),
      sqFtPerPlant: Number(
        (harvest.squareFootage / harvest.plantCount).toFixed(10)
      )
    }
  })

  // Sort by
  // order: request.query.order,
  const sortBy = queryParams.sortBy ? queryParams.sortBy : 'date'
  const order = queryParams.order ? queryParams.order : 'desc'

  // queryParams.order
  //   ? query.orderBy(sortColumn, queryParams.order)
  //   : query.orderBy(sortColumn, 'desc')
  return harvestList
}

function convertToPounds(grams) {
  return Number((grams / 448).toFixed(10))
}

module.exports = formatHarvests
