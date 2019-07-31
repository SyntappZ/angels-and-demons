<template>
  <v-container fluid class="nav-wrap">
    <v-layout wrap>
      <v-flex xs12 md12 lg12>
        <div class="img-wrap">
          <img src="logo.png" />
        </div>
        <div>
          <h2 class="cookie">Angels & Demons</h2>
        </div>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <v-layout class="link-wrap" wrap>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/">HOME</router-link>
          </v-flex>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/angels">ANGELS</router-link>
          </v-flex>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/demons">DEMONS</router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-wrap {
  text-align: center;
  min-height:40vh;
  background:white;
  font-family: Arial, Helvetica, sans-serif;
}
.img-wrap {
  width: 100px;
  margin:10px auto;
  padding-top: 10px;
  
}
img {
  width: 100%;
}
.cookie {
  font-weight:600;
  font-size:70px;
}
.link {
  padding: 20px 0;
  color: #333;
  text-decoration: none;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  transition: .2s;
}
.link-wrap {
  max-width:600px;
  margin:20px auto;

}
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
.link:hover {
  text-shadow: 0 0 20px #333;
}
.glow {
  text-shadow: 0 0 20px #fff;
}

@media (max-width: 600px) {
  .cookie {
    font-size: 40px;
  }
}
</style>
