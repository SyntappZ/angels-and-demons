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
    loadInfo({commit}, name) {
    //   axios({ 
    //     method: "get",
    //     url: 'http://en.wikipedia.org/w/api.php',
    //     params: {
    //       action: 'query',
    //       titles: name,
    //       format: 'json',
    //       prop: 'images|pageterms',
    //       origin: '*'
    //    },
       
        
    //   }).then(response => {
    //     let page = response.data.query.pages
    //      let id = Object.keys(page);
    //     let doc = page[id]


    //     let images = page[id].images
    //      let openingText = doc.opening_text
    //    let text = doc.text
    //    let source = doc.source_text.replace(/[\[\]{}]/g, '')
     
    //  let arr = source.split('==')
         
    //    console.log(doc)
       
       
        
    //   })
    //   .catch = error => console.log(error);
  
          axios({ 
        method: "get",
        url: 'http://en.wikipedia.org/w/api.php',
        params: {
          action: 'query',
          titles: name,
          format: 'json',
          prop: 'extracts',
          origin: '*'
       },
       
        
      }).then(response => {
        let page = response.data.query.pages
         let id = Object.keys(page);
        let doc = page[id].extract


    //     let images = page[id].images
    //      let openingText = doc.opening_text
    //    let text = doc.text
    //    let source = doc.source_text.replace(/[\[\]{}]/g, '')
     
    //  let arr = source.split('==')
       let arr =  doc.split('<p>')
       arr.forEach(x => console.log(x))
       
       
        
      })
      .catch = error => console.log(error);
    }
  }
})
