<template>
  <div class="info">
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12>
         {{ title }}
        </v-flex>
         
        <v-flex v-for="(item) in infoArray" :key="item.welcome" xs12>
         
          <p class="welcome">{{item.welcome}}</p>
        </v-flex>
        <v-flex v-for="(item, i) in infoArray" :key="i" xs12 md8 lg8>
          <h3 class="heading">{{ item.heading }}</h3>
          <p class="para">{{item.paragraph}}</p>
        </v-flex>
        <!-- <v-flex v-for="img in images" :key="img.id" xs12 md4 lg4>

        </v-flex>
        <v-flex v-for="ref in references" :key="ref.id" xs12>

        </v-flex>
        <v-flex v-for="link in extLinks" :key="link.id" xs12>

        </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
  mounted() {
    setTimeout(() => {
      let info = this.$store.state.info;
      info.forEach(x => this.infoArray.push(x));
    }, 700);
  },
  data() {
    return {
      infoArray: [],
      images: [],
      title: 'jeff'
    };
  },
  computed: {
    ...mapState(["html"])
  }
};
</script>

<style scoped>
.info {
  min-height: 50vh;
  background-color: rgb(240, 240, 240);
  border-top: solid 3px #333;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
}
.welcome {
  white-space: pre-line;
  font-size: 14px;
  letter-spacing: .5px;
  color:rgb(97, 97, 97);
}

.heading {
  padding:20px 0;
   font-family: "Quicksand", sans-serif;
   
  
   
}
.para {
  white-space: pre-line;
  font-size: 14px;
  letter-spacing: .5px;
  color:rgb(97, 97, 97);
}
</style>
