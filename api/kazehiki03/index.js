import express from "express";
const router = express.Router();
const axios = require("axios");

router.get("/slack", function(req, res) {
  // slackのAPIを叩く
  const token =
    "";
  const url = "https://slack.com/api/channels.history";
  const channel = "CLNLDHPUG";
  axios({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    params: {
      token: token,
      channel: channel
    }
  })
    .then(response => {
      console.info("[index.js]");
      console.log("response.data.ok:\n", response.data.ok);
      console.log("response.data.message:\n", response.data.messages);
      res.json({
        ok: response.data.ok,
        messages: response.data.messages
      })
    }
    )
    .catch(err => {
      console.log("err:", err);
    });
});

module.exports = router;
