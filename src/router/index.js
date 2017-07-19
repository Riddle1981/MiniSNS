import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/index/list'
import New from '../components/index/new'
import hotTest from '../components/index/hottest'
import unAnswered from '../components/index/unanswered'
import Feed from '../components/index/feed'
import Experts from '../components/index/experts'
// import register from '../components/public/register'
// import forget from '../components/public/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      children: [
        {
          path: '/',
          name: '最新',
          component: New
        },
        {
          path: '/new',
          name: '最新',
          component: New
        },
        {
          path: '/hottest',
          name: '最热',
          component: hotTest
        },
        {
          path: '/unanswered',
          name: '未回答',
          component: unAnswered
        },
        {
          path: '/feed',
          name: '动态',
          component: Feed
        },
        {
          path: '/experts',
          name: '付费',
          component: Experts
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'register',
    //   component: register
    // },
    // {
    //   path: '/forget',
    //   name: 'forget',
    //   component: forget
    // }
  ]
})
