import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    angels: [],
    demons: []
  },
  mutations: {

  },
  actions: {
    loadDemons({commit}) {
     axios
     .get('http://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=List%20of%20theological%20demons&origin=*')
     .then(data => {
       console.log(data)
     })
     .catch(error => console.log(error))
    },
    loadAngels({commit}) {
      axios
      .get('http://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=List%20of%20theological%20demons&origin=*')
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
     }
  }
})
