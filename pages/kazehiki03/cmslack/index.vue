<template>
  <div>
    <TheHeader />
    <ArticleBody :approvedMessages="approvedMessages" />
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
    };
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
          console.info("[index.vue]");
          console.log("response.data.status:", response.data.status);
          console.log("response.data.message:", response.data.messages);

          if (response.data.status === 200) {
            this.approvedMessages = response.data.messages;
          } else {
            //todo APIエラー時の挙動考えろ
          }
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
  background-color: #F6F6F6;
}
</style>