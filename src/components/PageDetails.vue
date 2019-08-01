<template>
  <div class="details">
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12></v-flex>
        <v-flex class="list-wrap" xs12 md6 lg6>
          <h2 class="title">{{ title }}</h2>
          <div v-for="(item, i) in list" :key="i">
            <h4 class="link">
              {{item.title}} 
              <span class="hyphen"> - </span>
              <span class="religion">{{ item.religion }}</span>
            </h4>
          </div>
        </v-flex>
        <v-flex xs12 md6 lg6>
          <div class="main-img" v-for="(image, i) in images" :key="i">
            <img :src="image.img" alt="no image" />
          </div>
        </v-flex>
        <v-flex xs12 md4 lg4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 lg4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 lg4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["list", "title", "images"],

  created() {
    
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.details {
  text-align: center;
  width: 80%;
  margin: auto;
  min-height: 50vh;
}
.list-wrap {
  width: 100%;

  text-align: left;
}
.religion {
  font-weight: 500;
}
.title {
  padding: 20px 0;
}
.link {
  padding: 5px 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.link:hover {
  transform: scale(1.1);
  text-shadow: 0 0 1px #333;
  
}

.main-img {
  width: 90%;
  position: relative;
   margin: 70px auto;  
 
}
.main-img img {
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  border:solid 3px #000;
}



@media (max-width: 1024px) {
     .details {
        width:100%;
       
    }
    .list-wrap {
         text-align:center;
    }
    .link {
        padding:10px 0;
        border:solid 1px #333;
        margin:10px 0;
        background:white;
    }
    .religion {
        display:block;
    }
    .main-img {
        margin: 20px auto;
    }
    .hyphen {
        display:none;
    }

}
@media (max-width: 600px) {
   
}
@media (min-width: 1500px) {
  

}
</style>
