import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import newsDetail from '@/components/newsDetail'
import teamDetail from '@/components/teamDetail'
import moreNews from '@/components/moreNews'
import moreProjects from '@/components/moreProjects'
import registrationForm from '@/components/registrationForm'
import projectDetail from '@/components/projectDetail'
import researchMore from '@/components/researchMore'
import researchDetail from '@/components/researchDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/projectDetail',
      name: 'projectDetail',
      component: projectDetail
    },
    {
      path: '/researchDetail',
      name: 'researchDetail',
      component: researchDetail
    },
    {
      path: '/researchMore',
      name: 'researchMore',
      component: researchMore
    },
    {
      path:'/registrationForm',
      name:'registrationForm',
      component:registrationForm
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
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
