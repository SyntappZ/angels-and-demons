<template>
  <div>
    <midPage />

    <religion />
  </div>
</template>

<script>
import religion from "@/components/ReligionLine";
import midPage from "@/components/MiddlePage";
export default {
  components: {
    religion,
    midPage
  },
  created() {
    this.$store.state.images = [];
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

