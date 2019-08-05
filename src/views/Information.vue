<template>
  <div class="wrap">
    <info />
  </div>
</template>

<script>
import info from "../components/info";

export default {
  components: {
    info
  },
  created() {
    
  },
  destroyed() {
     
     
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
.wrap {
   min-height: 52vh;
  background-color: rgb(240, 240, 240);
  border-top: solid 3px #333;
}
</style>
