import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { linkSync } from "fs";
import { async } from "q";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    info: [],
    links: [],
    images: [],
    title: "",
    loaded: false,
    isImages: '',
    allLoaded: []
  },
  mutations: {
   

    
    getSections(state, sections) {
      let arr = [];

      sections.forEach(x => arr.push(x.textContent.replace(/\n/g, "")));
      let removeBlank = arr
        .filter(x => x.length > 0)
        .filter(
          x => x !== "See also" && x !== "References" && x !== "External links"
        );

      for (let i = 0; i < removeBlank.length; i++) {
        if (removeBlank[i].split(" ").length > 3) {
          removeBlank[i] = { paragraph: removeBlank[i] };
        } else {
          removeBlank[i] = { heading: removeBlank[i] };
        }
      }

      let headings = removeBlank
        .map(x => x.heading)
        .filter(x => x !== undefined);

      let headIndex = [];
      let sectionArray = [];
      let start = 0;

      for (let i = 0; i < headings.length; i++) {
        headIndex.push(
          removeBlank.map(x => x.heading).indexOf(headings[i], start)
        );
        start = headIndex[i] + 1;
      }

      headIndex.unshift(0);
      for (let i = 0; i < headIndex.length; i++) {
        let section = removeBlank.slice(headIndex[i], headIndex[i + 1]);
        sectionArray.push(section);
      }
      let welcome = sectionArray.splice(0, 1);
      let infoArray = [];

      let toSort = sectionArray.filter(x => x.length > 1);
      welcome = welcome[0]
        .map(x => x.paragraph)
        .join("")
        .replace(/\. /g, ".\n");

      toSort.forEach(x => {
        let head = x
          .map(x => x.heading)
          .filter(x => x !== undefined)
          .join("");
        let para = x
          .map(x => x.paragraph)
          .filter(x => x !== undefined)
          .join("")
          .replace(/\. /g, ".\n");

        infoArray.push({
          heading: head,
          paragraph: para
        });
      });
      infoArray.push({ welcome: welcome });

      state.info = infoArray;
    },
    getLinks(state, links) {
      state.links = links;
      state.allLoaded.push(true)
    },
    getImages(state, images) {
      state.images = images;
      state.allLoaded.push(true)
    },
    getName(state, name) {
      state.title = name;
      state.allLoaded.push(true)
    },
    noImages(state) {
      state.allLoaded.push('none')
    }
  },
  actions: {
    loadInfo({ commit }, name) {
      
      axios({
        method: "get",
        url: "https://en.wikipedia.org/w/api.php",
        params: {
          action: "query",
          titles: name,
          format: "json",
          prop: "images|extlinks|References",
          origin: "*"
        }
      }).then(response => {
        let page = response.data.query.pages;
        let id = Object.keys(page);
        let doc = page[id];
        let links = [];
       
        if (doc.images !== undefined) {
          let imgs = doc.images.filter(x => x.title.match(/jpg$|png$/));
         if(imgs.length === 0) {
          commit('noImages')
         }
          imgs.forEach(x =>
            convertImages(x.title.replace(/File:/g, ""), imgs.length)
          );
        }
       
        
        if (doc.extlinks !== undefined) {
          doc.extlinks.forEach(x => links.push(Object.values(x).join("")));
        }
        links = links.filter(x => x.match(/^http:\/\/www/));
        let trimedLinks = [];
        links.forEach((x, i) => {
          let trimed = x
            .match(/www\.\w+[-.]\w+[-.]\w+|www\.\w+[-.]\w+/gi)
            .join("");
          trimedLinks.push({
            name: trimed,
            url: x
          });
        });

        commit("getLinks", trimedLinks);
      }).catch = error => console.log(error);

      axios({
        method: "get",
        url: "https://en.wikipedia.org/w/api.php",
        params: {
          action: "query",
          titles: name,
          format: "json",
          prop: "extracts",
          origin: "*"
        }
      }).then(response => {
        let page = response.data.query.pages;
        let id = Object.keys(page);
        let doc = page[id].extract;

        let parser = new DOMParser();
        let parsedDoc = parser.parseFromString(doc, "text/html");
        let body = parsedDoc.body;

        let sections = body.childNodes;
        commit("getSections", sections);
        commit("getName", name);
      }).catch = error => console.log(error);
      let urls = [];

      function convertImages(img, len) {
        axios({
          method: "get",
          url: "https://en.wikipedia.org/w/api.php",
          params: {
            action: "query",
            titles: "Image:" + img,
            format: "json",
            prop: "imageinfo",
            iiprop: "url",
            origin: "*"
          }
        }).then(response => {
          url = [];
          
          let page = response.data.query.pages;
          let id = Object.keys(page);
          let doc = page[id];
          let imgId = Object.keys(doc.imageinfo);
          let url = doc.imageinfo[imgId].url;
          

          urls.push(url);

          if (urls.length == len) {
            

            commit("getImages", urls);
           
          }
        }).catch = error => console.log(error);
      }
    }
  }
});
