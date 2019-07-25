<template>
  <v-container fluid class="nav-wrap">
    <v-layout class="link-wrap" wrap>
      <v-flex xs12 md5 lg5>
        <div class="img-wrap">
          <img src="logo.png" />
        </div>
        <div>
          <h2 class="cookie">Angels & Demons</h2>
        </div>
      </v-flex>
      <v-flex xs12 md7 lg7>
        <v-layout wrap>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/">Home</router-link>
          </v-flex>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/angels">Angels</router-link>
          </v-flex>
          <v-flex xs12 md4 lg4>
            <router-link class="link" to="/demons">Demons</router-link>
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
}
.img-wrap {
  width: 50px;
  margin-left: 30px;
  padding-top: 10px;
  
}
img {
  width: 100%;
}
.link {
  padding: 20px 0;
  color: #333;
  text-decoration: none;
  display: inline-block;
}
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
.link:hover {
  color: #eee;
}
.link-wrap {
}
@media (max-width: 900px) {
}
</style>
