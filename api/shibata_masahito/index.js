import express from 'express'
import sqlite3 from 'sqlite3'
const router = express.Router()

//DBのmy_nameを取得する
router.get('/my_name', function (req, res) {
  let db = new sqlite3.Database('db/shibata_masahito/shibata_masahito.db')
  db.serialize(function() {
    db.all('SELECT * FROM my_name WHERE id = 1', function(err, rows) {
        res.json(rows)
    })
    db.close()
  })
})

//DBのmy_nameを更新する
router.post('/my_name', function (req, res) {
  let myName = req.body.myName
  let db = new sqlite3.Database('db/shibata_masahito/shibata_masahito.db')
  db.serialize(function() {
    let stmt = db.prepare('UPDATE my_name SET name = ? WHERE id = ?')
    stmt.run([myName, 1])
    stmt.finalize()
    db.close()
  })
  res.send()
})

module.exports = router