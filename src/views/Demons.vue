<template>
  <div class="demons">
    <pageDetails 
    :list="getList"
     title="Demons"
     :images="demonImages"
     />
  </div>
</template>

<script>
import pageDetails from "../components/PageDetails";
import demonsList from '../demons.js'
export default {
  components: {
    pageDetails
  },
  mounted() {
    // this.$store.dispatch('loadInfo');
    demonsList.forEach(x => {
     this.demons.push({
       title: x.demon,
       religion: x.religion
     })
   })
  
  },
  data() {
    return {
      demons: [],
       demonImages: [
        {img: 'blackeyes.jpg'},
        {img: 'demon2.jpg'},
        {img: 'demon3.jpg'},
        {img: 'demon4.jpg'},
        {img: 'demon5.jpg'},
         {img: 'demon6.jpg'},
        {img: 'demon7.jpg'}
      ]
    };
  },
  methods: {},
  computed: {
      getList() {
      return this.demons
    }
  }
};
</script>

<style scoped>
.demons {
  background-color: rgb(240, 240, 240);
   border-top:solid 3px #333;
}
</style>
