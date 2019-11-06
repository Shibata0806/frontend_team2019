import express from 'express'
const router = express.Router()
const axios = require('axios');


router.get('/slack', function (req, res) {
    // slackのAPIを叩く
    const token = "";
    const url = "https://slack.com/api/channels.history"
    const channel = "CLNLDHPUG"
    axios({
        method: "GET",
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        params: {
            token: token,
            channel: channel
        }
    })
    .then(response => {
        console.log("status:", response.status)
        console.log("body:", response.data)
    })
    .catch(err => {
        console.log("err:", err)
    })

    res.json({
    message:"API call"
    });
})

module.exports = router


