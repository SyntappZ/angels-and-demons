<template>
<div class="angels">
   <pageDetails
    :list="getList"
     title="Angels"
     :images="angelImages"
     />
  
</div>
 
</template>

<script>
import pageDetails from '../components/PageDetails'
import angelsList from '../angels.js'
export default {
  
  components: {
    pageDetails  
  },
  created() {
   angelsList.forEach(x => {
     this.angels.push({
       title: x.angel,
       religion: x.religion
     })
   })
   
  },
 
  data() {
    return {
      angels: [],
      
      angelImages: [
        {img: 'fallenAngel.jpg'},
        {img: 'angel3.jpg'},
        {img: 'angel4.jpg'}
      ]
  
      
    }
  },
  methods: {

  },
  computed: {
    getList() {
      return this.angels
    },
   

  }
}
</script>

<style scoped>
.angels {
 background-color: rgb(240, 240, 240);
 border-top:solid 3px #333;
}
</style>
