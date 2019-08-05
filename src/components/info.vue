<template>
  <div class="info">
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12>
          <h1 class="title">{{ title }}</h1>
        </v-flex>

        <v-flex xs12>
          <div v-for="(item) in infoArray" :key="item.welcome">
            <p class="welcome">{{item.welcome}}</p>
          </div>
        </v-flex>
        <v-flex xs12 md8 lg8>
          <div v-for="(item, i) in infoArray" :key="i">
            <h3 class="heading">{{ item.heading }}</h3>
            <p class="para">{{item.paragraph}}</p>
          </div>
        </v-flex>
        <v-flex xs12 md4 lg4>
          <div class="img-wrap" v-for="img in images" :key="img">
            <img class="img" :src="img" alt="jeff" />
          </div>
        </v-flex>

        <v-flex v-if="links.length > 0" xs12>
          <h2 class="link-title">External Links</h2>
          <div v-for="link in links" :key="link">
            <a class="link" :href="link" target="_blank">{{link}}</a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
  created() {
       console.log(this.images)
    setTimeout(() => {
      let info = this.$store.state.info;
      this.images = this.$store.state.images;
      this.title = this.$store.state.title;
      this.links = this.$store.state.links;
      info.forEach(x => this.infoArray.push(x));

      if (info.length < 1) {
        this.$router.push("/");
      }
    }, 500);
  },
  destroyed() {
    this.images = [];
    console.log(this.images)
    console.log('jeff')
    this.infoArray = [];
    this.links = [];
  },
  data() {
    return {
      infoArray: [],
      images: [],
      links: [],
      title: ""
    };
  },
  computed: {}
};
</script>

<style scoped>
.info {
  width: 80%;
  margin: auto;
  font-weight: 500;
  padding-bottom: 30px;
}

.welcome {
  white-space: pre-line;
  font-size: 16px;
  color: rgb(66, 66, 66);
}

.heading {
  padding: 20px 0;

  font-family: "Quicksand", sans-serif;
}
.title {
  text-align: center;
  padding: 20px 0;
}
.title:before,
.title:after {
  background-color: rgb(0, 0, 0);
  content: "";
  display: inline-block;
  height: 3px;
  position: relative;
  vertical-align: middle;
  width: 20%;
  margin: 0 10px;
}

.para {
  white-space: pre-line;
  color: rgb(66, 66, 66);
  line-height: 20px;
}
.img-wrap {
  padding-left: 10px;
}
.img {
  width: 100%;
  border: solid 3px black;
  margin: 20px 0;
  filter: grayscale(100%);
}
.link-title {
  text-align: center;
  padding: 20px 0;
}

.link {
  text-align: center;
  display: block;
  color: rgb(22, 22, 22);
  padding: 7px 0;
  text-decoration: none;
}
.link-title:before,
.link-title:after {
  background-color: rgb(0, 0, 0);
  content: "";
  display: inline-block;
  height: 3px;
  position: relative;
  vertical-align: middle;
  width: 25%;
  margin: 0 10px;
}
</style>
