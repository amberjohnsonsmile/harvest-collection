# Harvest Collection API

Summary

##### Table of Contents

[Technologies](#technologies)  
[Endpoints](#endpoints)  
[Database](#database)
[Running the API locally](#running-the-api-locally)  
[License](#license)  
[Contact](#contact)

## Technologies

Node.js  
Express.js  
PostgreSQL  
Knex.js  
Heroku  
Chai HTTP

## Endpoints

#### `POST /harvests`

Summary

**Example request** :

```json
{
  "plantCount": 528,
  "harvestGrams": 202,
  "totalPlantGrams": 3410,
  "classification": "REC",
  "bay": "nw-615",
  "strain": "PEX"
}
```

**Example response** : `201 Created`

```json
{
  "id": "uih4r9u8ewafu",
  "plantCount": 528,
  "harvestGrams": 202,
  "totalPlantGrams": 3410,
  "classification": "REC",
  "bay": "nw-615",
  "strain": "PEX",
  "date": "01/01/2019",
  "harvestLbs": 0.4508928571,
  "totalPlantLbs": 7.6116071429,
  "percentHarvestedPlantWeight": 5.923753666,
  "lbsHarvestedPerSqFt": 0.008318696331,
  "plantsPerLight": 9.4285714286,
  "harvestLbsPerLight": 0.008051658162,
  "sqFtPerPlant": 0.5770491803
}
```

---

#### `GET /harvests`

Summary

**Example request** : `/harvests?strain=PEX&bay=nw615&sort_by=date&order=DESC`

**Example response** : `200 OK`

```json
[
  {
    "id": "uih4r9u8ewafu",
    "plantCount": 528,
    "harvestGrams": 202,
    "totalPlantGrams": 3410,
    "classification": "REC",
    "bay": "nw615",
    "strain": "PEX",
    "date": "01/01/2019",
    "harvestLbs": 0.4508928571,
    "totalPlantLbs": 7.6116071429,
    "percentHarvestedPlantWeight": 5.923753666,
    "lbsHarvestedPerSqFt": 0.008318696331,
    "plantsPerLight": 9.4285714286,
    "harvestLbsPerLight": 0.008051658162,
    "sqFtPerPlant": 0.5770491803
  }
]
```

---

## Database

## Running the API locally

To run the API locally, follow these steps:

1.  If you don't have Postgresql installed, follow download instructions [here](https://www.postgresql.org/download/).
1.  Create a database named `harvest`.
1.  Clone down this repo and navigate into the main directory.
1.  Install dependencies with `npm install && npm install knex -g`
1.  Setup the local database with `knex migrate:latest && knex seed:run`
1.  Launch the application by running `npm run dev`
1.  Navigate to `localhost:3000` to visit the endpoints.
1.  To run the tests, run `npm test`

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

## Contact

Amber Johnson, Full Stack Web Developer

![headshot](https://user-images.githubusercontent.com/31632938/53816667-30666b80-3f21-11e9-81ff-6756194104a9.jpeg)

Email amberjohnsonsmile@gmail.com  
Portfolio [amberjohnsonsmile.co](https://amberjohnsonsmile.co)  
GitHub [amberjohnsonsmile](https://github.com/amberjohnsonsmile)  
LinkedIn [amberjohnsonsmile](https://linkedin.com/in/amberjohnsonsmile)
