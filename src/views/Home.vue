<template>
  <div class="home-wrap">
  <midPage />
  
  </div>
  
</template>

<script>

import midPage from '@/components/MiddlePage'
export default {
  components: {
   
    midPage
  },
  data() {
    return {
      test: ""
    };
  },
  methods: {
    getStore() {}
  }
};
</script>

<style scoped>
.home-wrap {
 
}
.welcome {
  text-align: center;
}

@media (max-width: 900px) {
 
}
</style>

