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

router.get('/railway_detail/:railway_id',function(req,res){
  let railway_id = req.params.railway_id
  let db = new sqlite3.Database('db/kameda_haruki/odpt_foropst.sqlite3')
  db.serialize(function() {
  db.all(`
  SELECT
    railways.same_as as railwayId,
    railways.name_jpn as railwayName,
    railways.color as railwayColor,
    railways.code as railwayCode,
    railways.train_status_odpt_id as trainStatusOdptId,
    railways.vehicle_location_available as vehicleLocationAvailable,
    railways.ascending_order_direction as ascendingOrderDirection,
    ascendingDirections.name_jpn as ascendingDirectionName,
    railways.descending_order_direction as descendingOrderDirection,
    descendingDirections.name_jpn as descendingDirectionName
  FROM
    railways
  INNER JOIN
    railDirections as ascendingDirections
  ON
    railways.ascending_order_direction = ascendingDirections.same_as
  INNER JOIN
    railDirections as descendingDirections
  ON
    railways.descending_order_direction = descendingDirections.same_as
  WHERE
    railways.same_as = '${railway_id}'
  `,
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