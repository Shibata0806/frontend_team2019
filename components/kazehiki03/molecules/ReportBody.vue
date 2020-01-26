<template>
  <div class="reportBody">
    <div class="mdReportTimestamp">
      <div class="dateStamp">{{this.dateStamp}}</div>
      <div class="timeStamp">{{this.timeStamp}}</div>
    </div>
    <div class="mdReportDetail">
      <div class="mdReportText">{{contents.approvedMsgTxt.text}}</div>
      <div
        class="mdReportFiles"
        v-if="contents.approvedFiles.length >= 1 && (
          contents.approvedFiles.filetype == jpeg || contents.approvedFiles.filetype == jpg || contents.approvedFiles.filetype == png
          )"
      >
        <ul>
          <li v-for="files in contents.approvedFiles" v-bind:key="files.privateUrl">
            <img :src="files.privateUrl" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  data() {
    return {
      dateStamp: "",
      timeStamp: ""
    };
  },
  beforeMount() {
    // マウント前にunix timeを表示用にdate objectに変換する
    if (
      this.contents.approvedMsgTxt.ts !== undefined ||
      this.contents.approvedMsgTxt.ts !== null
    ) {
      let dateTime = new Date(this.contents.approvedMsgTxt.ts * 1000);
      this.dateStamp = `${dateTime.getFullYear()}年${dateTime.getMonth() +
        1}月${dateTime.getDate()}日`;
      this.timeStamp = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
    } else {
      // なにもしない
    }
  }
};
</script>

<style scoped lang="scss">
.reportBody {
  display: flex;
  flex-wrap: nowrap;
  background-color: #fff;
  width: 800px;
  height: 100%;
  min-height: 128px;
  padding: 8px;
  margin: 24px auto 0;
  .mdReportTimestamp {
    font-weight: bold;
    white-space: nowrap;
    min-width: 172px;
    padding-left: 3px;
    .timeStamp {
      font-size: 24px;
    }
    & div {
      border-left: 3px solid red;
      padding-left: 8px;
      line-height: 1.2;
    }
  }
  .mdReportDetail {
    width: 100%;
    height: 100%;
    margin-left: 8px;
    padding: 8px;
    .mdReportText {
      width: max-content;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .mdReportFiles {
      margin-top: 24px;
      & img {
        max-width: 296px;
        max-height: 296px;
        margin-bottom: 8px;
        border: solid 1px #eaeaea;
      }
    }
  }
}
</style>