<template>
  <div class="app-wrap">
    <Nav />
    <router-view />
  </div>
</template>

<script>
 
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav
  },

    
  
  
  data() {
    return {

    };
  },
 
  
};
</script>

<style>
html {
  overflow-y: auto;
}

body {
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  background-image: url("/bg3.jpg");
  background-size: cover;
  height:100vh;
 
}
.cookie {
  font-family: 'Cookie', cursive;
  font-weight: 100;
}
</style>

