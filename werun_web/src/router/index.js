import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import newsDetail from '@/components/newsDetail'
import teamDetail from '@/components/teamDetail'
import moreNews from '@/components/moreNews'
import moreProjects from '@/components/moreProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/moreNews',
      name: 'moreNews',
      component: moreNews,
    },
    {
      path: '/moreProjects',
      name: 'moreProjects',
      component: moreProjects,
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/teamDetail',
      name: 'teamDetail',
      component: teamDetail
    }
  ]
})
