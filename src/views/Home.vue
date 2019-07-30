<template>
  <div class="home-wrap">
    <div class="welcome">
      <h1 class="cookie">Welcome</h1>
      <h1 class="cookie">to</h1>
      <h1 class="cookie">Angels & Demons</h1>
    </div>
   
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter";
export default {
  components: {
    PageFooter
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
  width: 100%;
  height: 80vh;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;
}
.welcome {
  text-align: center;
}

@media (max-width: 900px) {
  .home-wrap {
    display: none;
  }
}
</style>

