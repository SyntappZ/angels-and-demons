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
        <v-flex v-if="images.length > 0 && images.length < 4" xs12 md9>
          <div v-for="(item, i) in infoArray" :key="i">
            <h3 class="heading">{{ item.heading }}</h3>
            <p class="para">{{item.paragraph}}</p>
          </div>
        </v-flex>
        <v-flex v-else xs12>
          <div v-for="(item, i) in infoArray" :key="i">
            <h3 class="heading">{{ item.heading }}</h3>
            <p class="para">{{item.paragraph}}</p>
          </div>
        </v-flex>
        <v-flex v-if="images.length > 0 && images.length < 4" xs12 md3>
          <div class="img-wrap" v-for="img in images" :key="img">
            <img class="img" :src="img" alt="jeff" />
          </div>
        </v-flex>
        <v-flex v-else xs12>
          <div class="grid1">
            <div class="image1" v-for="img in images" :key="img">
              <img :src="img" alt="jeff" />
            </div>
          </div>
        </v-flex>

        <v-flex v-if="links.length > 0" xs12>
          <h2 class="link-title">External Links</h2>
          <div v-for="(link, j) in links" :key="j">
            <a class="link" :href="link.url" target="_blank">{{ link.name }}</a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
import Isotope from "isotope-layout";
import { domainToUnicode } from "url";
export default {
  created() {
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
  mounted() {},
  destroyed() {},
  data() {
    return {
      infoArray: [],
      images: [],
      links: [],
      title: "",
      isotope: null
    };
  },
  methods: {},
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
  line-height: 23px;
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
  line-height: 23px;
}
.img-wrap {
  width: 100%;
  margin-left: 10px;
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
.grid1 {
  width: 100%;
 
 display:flex;
 flex-wrap:wrap;
  justify-content: center;
  
}
.image1 {
  width: 300px;
}

.image1 img {
  width: 100%;

  filter: grayscale(100%);
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
.link:hover {
  letter-spacing: 1px;
  color:grey;
}
@media (max-width: 1024px) {
  .link-title:before,
  .link-title:after {
    display: none;
  }
  .info {
    width: 95%;
  }
}
</style>
