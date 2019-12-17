<template>
  <div class="reportBody">
      <div>{{contents.ts}}</div>
      <div>{{contents.text}}</div>
  </div>
</template>

<script>
// import ReportDateLabel from "~/components/kazehiki03/atoms/ReportDateLabel";
// import ReportTextData from "~/components/kazehiki03/atoms/ReportTextData";
// import ReportContentsData from "~/components/kazehiki03/atoms/ReportContentsData";

export default {
  // components: {
  //   ReportDateLabel,
  //   ReportTextData,
  //   ReportContentsData
  // },
  props: ["contents"],
  data() {
    return {
    }
  }
};
</script>

<style lang="scss">
.reportBody {
  background-color: #262733;
  color: #fff;
  width: 100vw;
  height: 100px;
}
</style>