<template>
  <div>
    <TheHeader />
    <ArticleBody />
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
  created() {
    this.getChannelsHistory();
  },
  methods: {
    getChannelsHistory: function() {
      axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
        .then(response => {
          console.info("[index.vue]");
          console.log("response:", response);
          console.log("status:", response.status);
          console.log("body:", response.data);
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  }
};
</script>