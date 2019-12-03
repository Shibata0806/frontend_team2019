<template>
  <div>
    <ul>
      <!-- <li v-for="message in {{approvedMessages}}"> -->
        <ReportBody />
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
import ReportBody from "~/components/kazehiki03/molecules/ReportBody";
export default {
  components: {
    ReportBody
  },
  props: {
    approvedMessages: Array
  },
  // data: {
  //   messages: this.approvedMessages
  // },
  mounted() {
    this.hoge();
  },
  created(){
    this.fuga();
  },
  computed: {
    piyo() {
      console.info('piyooooooooooooooooooooooo');
    }
  },
  methods: {
    hoge: function () {
      // console.info(this.messages);
      console.info("ほげぇぇぇぇぇぇぇぇぇぇ");
    },
    fuga: function () {
      // console.info(this.messages);
      console.info("ふがぁぁぁぁぁぁぁぁぁぁぁぁ");
    }
  }
};
</script>

