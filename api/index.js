import express from 'express'
import bodyParser from 'body-parser'
const app = express();

//POSTのBodyをパースするための設定
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//各メンバーのディレクトリを読み込んで、PATHと紐付ける
app.use('/shibata_masahito', require('./shibata_masahito'))


app.get("/", (req, res) => {
  res.send("API server works fine");
})

module.exports = {
  path: '/api',
  handler: app
}