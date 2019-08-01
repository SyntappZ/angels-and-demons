import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    angels: [],
    demons: [],
   
  },
  mutations: {

  },
  actions: {
    loadInfo({commit}) {
      axios({ 
        method: "get",
        url: 'http://en.wikipedia.org/w/api.php',
        params: {
          action: 'query',
          titles: 'Anzû',
          format: 'json',
          prop: 'images|cirrusbuilddoc',
          origin: '*'
       },
       
        
      }).then(response => {
        let page = response.data.query.pages
         let id = Object.keys(page);
        let doc = page[id].cirrusbuilddoc
         let openingText = doc.opening_text


        
        console.log(openingText)
       
       
        
      })
      .catch = error => console.log(error);
  

    }
  }
})
