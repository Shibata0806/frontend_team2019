<template>
  <div>
    <ul>
      <li v-for="messages in approvedMessages" v-bind:key="messages.ts">
        <ReportBody :contents="messages" />
        <!-- <div>{{messages.ts}}</div> -->
        <!-- <div>{{messages.text}}</div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import ReportBody from "~/components/kazehiki03/molecules/ReportBody";
export default {
  components: {
    ReportBody
  },
  props: ["approvedMessages"]
};
</script>

