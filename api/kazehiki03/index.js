import express from "express";
const router = express.Router();
const axios = require("axios");

router.get("/slack", function(req, res) {


  // slackのAPIを叩く
  const token =
    "xoxp-691290366226-691305811763-876291843172-980f0c25a9867fcced680f5a57132736";
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
  }).then(response => {
    const approveMark = "white_check_mark";
    const disagreeMark = "no_entry_sign";
    var approvedMessage = {};
    var approvedMessages = [];

    console.info("[index.js]");
    console.info("status:", response.status);

    let messages = response.data.messages;
    console.log("取得メッセージ数:", messages.length);
    console.log("response.data.messages:", messages);

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].type && messages[i].type === "message") {
        if (messages[i].reactions) {
          for (let j = 0; j < messages[i].reactions.length; j++) {
            //  type=messageでreactionがついていてapproveMarkが1つ以上ついている
            if (
              messages[i].reactions[j].name === approveMark &&
              messages[i].reactions[j].count >= 1
            ) {
              approvedMessage = { ts: messages[i].ts, text: messages[i].text };
              console.info(`approvedMessagesにpush`,approvedMessage)
              approvedMessages.push(approvedMessage);
            }
          }
        }
      } else {
        console.warn("is not message:", messages[i].text);
      }
    }
    console.log(approvedMessages);
    res.json({
      status: response.status,
      messages: approvedMessages
    });
  });
});

module.exports = router;
