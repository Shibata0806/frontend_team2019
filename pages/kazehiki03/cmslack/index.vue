<template>
  <div>
    <TheHeader />
    <ArticleBody :approvedMessages='approvedMessages'/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/kazehiki03/common/TheHeader";
import TheFooter from "~/components/kazehiki03/common/TheFooter";
import ArticleBody from "~/components/kazehiki03/organisms/ArticleBody";
const axios = require("axios");
const url = "http://localhost:3000/api/kazehiki03/slack";

export default {
  components: {
    TheHeader,
    TheFooter,
    ArticleBody
  },
  data() {
    return {
      approvedMessages: []
    }
  },
  created() {
    this.getChannelsHistory();
  },
  methods: {
    getChannelsHistory: function() {
      var messages = [];

      axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
        .then(response => {
          const approveMark = "white_check_mark";
          const disagreeMark = "no_entry_sign";
          var approvedMessage = {};

          console.info("[index.vue]");
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
                    approvedMessage = {ts: messages[i].ts, text:messages[i].text};
                    this.approvedMessages.push(approvedMessage)
                  }
                }
              }
            } else {
              console.warn("is not message:", messages[i].text);
            }
          }
          console.log(this.approvedMessages);
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  }
};
</script>

<style scope lang="scss">
body {
  background-color: #141622;
}
</style>