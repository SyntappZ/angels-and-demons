<template>
  
  <midPage />
  
  
  
</template>

<script>

import midPage from '@/components/MiddlePage'
export default {
  components: {
   
    midPage
  },
  created() {
    this.$store.state.images = []
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

.welcome {
  text-align: center;
}

@media (max-width: 900px) {
 
}
</style>

