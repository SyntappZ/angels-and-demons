<template>
<div class="bg">
   
    <topImg bgImg="demon.jpg" theSkew="Welcome To Angels & Demons" />
<div class="midPage">
    <v-container grid-list-md text-center>
      <v-layout wrap class="layout-wrap">
        <v-flex xs12>
          <div class="title">
            <h4>demons & angels</h4>
          </div>
        </v-flex>
        <v-flex class="img-title-wrap" v-for="image in images" :key="image.title" xs12 sm12 md4 lg4>
          <div class="img-wrap">
            <img :src="image.url" alt />
          </div>
          <h3 class="img-title">{{ image.title }}</h3>
        </v-flex>

      
      </v-layout>
    </v-container>
  </div>
</div>
 
</template>

<script>
import topImg from "./TopImg";
export default {
  components: {
    topImg
  },
  data() {
    return {
      images: [
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Christianandapollyon.jpg/250px-Christianandapollyon.jpg",
          title: "Abaddon/Apollyon"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Caacrinolaas.png/220px-Caacrinolaas.png",
          title: "Glasya-Labolas"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lilith_%28John_Collier_painting%29.jpg/220px-Lilith_%28John_Collier_painting%29.jpg",
          title: "Lilith"
        }
      ],
    
    };
  },
  computed: {}
};
</script>

<style scoped>
.midPage {
  text-align: center;
  width: 80%;
  margin: auto;
}
.bg {
  width:100%;
  text-align: center;
}

.title {
  height: 60px;
  line-height: 60px;

  margin: 50px auto;
}
.title h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
}

.title h4:before,
.title h4:after {
  background-color: rgb(0, 0, 0);
  content: "";
  display: inline-block;
  height: 3px;
  position: relative;
  vertical-align: middle;
  width: 20%;
  margin: 0 10px;
}

.img-title {
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.img-wrap {
  width: 300px;
  height: 250px;
  margin: 10px auto;
  border: solid 3px #000;
}
.img-wrap img {
  width: 100%;
  object-fit: cover;
  object-position: 0 -30px;
  height: 244px;
  filter: grayscale(100%);
}
h1 {
  padding: 40px 0;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.img-title-wrap {
  margin: 50px 0;
}


@media (max-width: 1024px) {
  .midPage {
    width: 100%;
  }

  .img-wrap {
    width: 500px;
    height: 450px;
  }
  .img-wrap img {
    height: 444px;
  }
}
@media (max-width: 600px) {
  .img-wrap {
    width: 90%;
    height: 260px;
  }
  .img-title-wrap {
    margin: 20px auto;
  }
  .img-wrap img {
    height: 254px;
  }
  .title h4 {
    font-size: 18px;
  }
  .title h4:before,
  .title h4:after {
    width: 0;
  }
  .title {
    margin: auto;
    border-bottom:solid;
    width:80%;
  }
  a {
 border:solid 2px #333;
 width:80%;
  padding: 15px 0;
  margin: 5px 0;
  transition: 0.3s;
}
}
</style>
