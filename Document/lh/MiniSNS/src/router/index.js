import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import New from '@/components/new'
import hotTest from '@/components/hottest'
import unAnswered from '@/components/unanswered'
import Feed from '@/components/feed'
import Experts from '@/components/experts'

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
  ]
})
