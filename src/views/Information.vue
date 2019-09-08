<template>
  <div class="wrap">
    <div v-if="loaded == false" class="loader">
      <v-progress-circular :size="70" :width="4" color="black" indeterminate></v-progress-circular>
    </div>
    <div v-else>
      <info />
    </div>
  </div>
</template>

<script>
import info from "../components/info";
import { setTimeout } from "timers";
import { mapState } from "vuex";
export default {
  components: {
    info
  },
  
  destroyed() {
    this.loaded = false;
    
  },
  data() {
    return {
      loaded: false,
     
    };
  },
  computed: {
    ...mapState(['allLoaded'])
  },
  watch: {
    allLoaded(val) {
     if(val.length === 3) {
       this.loaded = true;
       this.$store.state.allLoaded = []
     }
    
    }
      
  }
};
</script>

<style scoped>
.wrap {
  min-height: 52vh;
  background-color: rgb(240, 240, 240);
  border-top: solid 3px #333;
}
.loader {
  margin-top: 30px;
  text-align: center;
}
</style>
