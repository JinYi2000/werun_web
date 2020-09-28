import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import newsDetail from '@/components/newsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    }
  ]
})
