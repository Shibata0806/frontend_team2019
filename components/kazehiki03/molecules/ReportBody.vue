<template>
  <div class="reportBody">
    <div class="mdReportTimestamp">{{this.timeStamp}}</div>
    <div class="mdReportText">{{contents.text}}</div>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  data() {
    return {
      timeStamp: ""
    };
  },
  beforeMount() {
    if (this.contents.ts !== undefined || this.contents.ts !== null) {
      let dateTime = new Date(this.contents.ts * 1000);
      this.timeStamp = `${dateTime.getFullYear()}年${dateTime.getMonth() +
        1}月${dateTime.getDate()}日 ${dateTime.getHours()}:${dateTime.getMinutes()}`;
    } else {
      // なにもしない
    }
  }
};
</script>

<style lang="scss">
.reportBody {
  background-color: #fff;
  width: 92vw;
  height: 100%;
  // min-width: 312px;
  min-height: 32px;
  padding: 8px;
  margin: 24px auto 0;
  border: 1px solid #CCC;
  border-radius: 10px;
}
</style>