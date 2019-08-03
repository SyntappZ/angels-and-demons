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

        let contentTitles = []
        let paragraphs = []
        let page = response.data.query.pages
         let id = Object.keys(page);
        let doc = page[id].extract
        
        let parser = new DOMParser
        let parsedDoc = parser.parseFromString(doc, 'text/html')
        let body = parsedDoc.body
        
        let sections = body.querySelectorAll('h2')
        let para = body.querySelectorAll('p')
        sections.forEach(x => contentTitles.push(x.textContent))
        console.log(contentTitles) 
        para.forEach(x => paragraphs.push(x.textContent))
        console.log(paragraphs)









    //     let images = page[id].images
    //      let openingText = doc.opening_text
    //    let text = doc.text
    //    let source = doc.source_text.replace(/[\[\]{}]/g, '')
     
    //  let arr = source.split('==')
      
       
       
        
      })
      .catch = error => console.log(error);
    }
  }
})
