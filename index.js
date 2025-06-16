require('dotenv').config()
const express = require('express')
const app = express()
const goatPlayer = {
  "playerId": "VK001",
  "name": "Virat Kohli",
  "country": "India",
  "battingStyle": "Right-hand bat",
  "bowlingStyle": "Right-arm medium",
  "role": "Top-order batter",
  "career": {
    "internationalDebut": {
      "ODI": "2008-08-18",
      "Test": "2011-06-20",
      "T20I": "2010-06-12"
    },
    "matches": {
      "ODI": 292,
      "Test": 113,
      "T20I": 117,
      "IPL": 252
    },
    "runs": {
      "ODI": 13848,
      "Test": 8848,
      "T20I": 4037,
      "IPL": 8004
    },
    "centuries": {
      "ODI": 50,
      "Test": 29,
      "T20I": 1,
      "IPL": 8
    },
    "halfCenturies": {
      "ODI": 72,
      "Test": 30,
      "T20I": 37,
      "IPL": 55
    },
    "highestScore": {
      "ODI": 183,
      "Test": 254,
      "T20I": 122,
      "IPL": 113
    }
  },
  "titles": [
    "ICC Cricket World Cup Winner (2011)",
    "ICC Champions Trophy Winner (2013)",
    "ICC Test Mace Winner (2016, 2017, 2018, 2019)",
    "ICC Cricketer of the Year (2017, 2018)",
    "Rajiv Gandhi Khel Ratna Award (2018)",
    "Padma Shri (2017)",
    "ICC ODI Player of the Year (2012, 2017, 2018)",
    "Wisden Leading Cricketer in the World (2016, 2017, 2018)",
    "Most Runs in a Single IPL Season (973 in 2016)",
    "Most Centuries in ODI History (50)"
  ],
  "captaincy": {
    "ODI": {
      "matches": 95,
      "wins": 65,
      "losses": 27
    },
    "Test": {
      "matches": 68,
      "wins": 40,
      "losses": 17
    },
    "T20I": {
      "matches": 50,
      "wins": 30,
      "losses": 16
    }
  },
  "social": {
    "instagram": "@virat.kohli",
    "twitter": "@imVkohli"
  },
  "isActive": true
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/krishna', (req, res)=>{
    res.send('harekrishna radhe krishna')
})

app.get('/puneet', (req, res)=>{
    res.send("<h1>harekrishna</h1>")
})

app.get('/virat', (req, res)=>{
    res.json(goatPlayer)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
