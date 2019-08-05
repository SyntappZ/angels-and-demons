import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/angels',
      name: 'angels',
     
      component: () => import('./views/Angels.vue')
    },
    {
      path: '/demons',
      name: 'demons',
     
      component: () => import('./views/Demons.vue')
    },
    {
      path: '/information',
      name: 'information',
     
      component: () => import('./views/Information.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;

    }else{
      return {x: 0, y: 0}
    }
  }
})
