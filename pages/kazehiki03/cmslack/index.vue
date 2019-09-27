<template>
  <div>Hello World</div>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000/api/kazehiki03/slack"

export default {
	created() {
		this.getChanelhistory()
  },
	methods: {
		getChanelhistory: function() {
			axios({
				method: "GET",
				url: url,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
			})
			.then(response => {
				console.log("status:", response.status);
				console.log("body:", response.data);
			})
			.catch(err => {
				console.log("err:", err);
			});
		}
	}
}
</script>