<template>
  <div class="app-wrap">
    

    <Nav />
    
      <router-view />
    
    
    <pageFooter />
  </div>
</template>

<script>
 
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";
export default {
  name: "App",
  components: {
    Nav,
     PageFooter
    
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
  height:100vh;
 
  
 
}


.cookie {
  font-family: 'Cookie', cursive;
  font-weight: 100;
}
</style>

