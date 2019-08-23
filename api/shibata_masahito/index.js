const express = require('express')
const router = express.Router()

router.get('/my_name', function (req, res) {
  let myName = '柴田 昌人'
  res.send(myName)
})
router.post('/my_name', function (req, res) {
  console.log(req.body)
  res.send()
})

module.exports = router