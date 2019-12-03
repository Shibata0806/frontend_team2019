<template>
  <div class="reportBody">
    <ReportDateLabel />
    <ReportTextData />
    <ReportContentsData />
  </div>
</template>

<script>
import ReportDateLabel from "~/components/kazehiki03/atoms/ReportDateLabel";
import ReportTextData from "~/components/kazehiki03/atoms/ReportTextData";
import ReportContentsData from "~/components/kazehiki03/atoms/ReportContentsData";

export default {
  components: {
    ReportDateLabel,
    ReportTextData,
    ReportContentsData
  },
  props: {
    dateTime: String,
    reportText: String,
    contentsType: String,
    contentsData: Object
  },
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
}
</style>