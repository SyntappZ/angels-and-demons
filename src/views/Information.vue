<template>
    <div class="info">
         <v-container grid-list-md text-center>
    <v-layout wrap>
      <v-flex xs12>
       <h3>title</h3>
       <p>info</p>
      </v-flex>
      <v-flex v-for="(item) in infoArray" :key="item.welcome" xs12>
       
      <p>{{item.welcome}}</p>
    
      </v-flex>
      <v-flex v-for="(item, i) in infoArray" :key="i" xs12>
       
        <h3>{{ item.heading }}</h3>
      <p>{{item.paragraph}}</p>
    
      </v-flex>
    </v-layout>
  </v-container>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { setTimeout } from 'timers';
export default {
  mounted() {
    setTimeout(() => {
       
    let info = this.$store.state.info
    info.forEach(x => this.infoArray.push(x))
    
    }, 700)
   
   
  
  },
    data() {
        return {
            infoArray: []
        }
    },
    computed: {
      ...mapState(['html'])
    }
}
</script>

<style scoped>
    .info {
        min-height:50vh;
    }
</style>
