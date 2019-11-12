<template>
  <div>
    <ReportDateLabel />
    <ReportTimeLabel />
  </div>
</template>

<script>
import ReportDateLabel from "~/components/kazehiki03/atoms/ReportDateLabel";
import ReportTimeLabel from "~/components/kazehiki03/atoms/ReportTimeLabel";

export default {
  components: {
    ReportDateLabel,
    ReportTimeLabel
  }
};
</script>