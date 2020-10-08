import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import newsDetail from '@/components/newsDetail'
import teamDetail from '@/components/teamDetail'
import researchMore from '@/components/researchMore'
import teamMembers from '@/components/teamMembers'

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
    },
    {
      path: '/teamDetail',
      name: 'teamDetail',
      component: teamDetail
    },
    {
      path: '/teamMembers',
      name: 'teamMembers',
      component: teamMembers
    },
    {
      path: '/researchMore',
      name: 'researchMore',
      component: researchMore
    },
  ]
})
