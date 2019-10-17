import express from 'express'
import sqlite3 from 'sqlite3'
const router = express.Router()

router.get('/railway_list', function (req, res) {
  let db = new sqlite3.Database('db/kameda_haruki/odpt_foropst.sqlite3')
  db.serialize(function() {
	db.all('SELECT * FROM railways ORDER BY name_eng',
	function(err, rows) {
        res.json(rows)
    })
    db.close()
  })
})

router.get('/station_list/:railway_id', function (req, res) {
  let railway_id = req.params.railway_id
  let db = new sqlite3.Database('db/kameda_haruki/odpt_foropst.sqlite3')
  db.serialize(function() {
	db.all(`SELECT StationOrders.station_order, Stations.same_as, Stations.name_jpn as station_name_jpn, Stations.name_eng as station_name_eng, Stations.name_kana as station_name_kana, Stations.longitude, Stations.latitude FROM StationOrders INNER JOIN Stations ON StationOrders.station_id = Stations.same_as WHERE StationOrders.railway_id = '${railway_id}' ORDER BY StationOrders.station_order`,
	function(err, rows) {
        res.json(rows)
    })
    db.close()
  })
})

module.exports = router