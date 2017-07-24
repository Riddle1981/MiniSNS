import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/index/main_page'
import New from '../components/index/new'
import hotTest from '../components/index/hottest'
import unAnswered from '../components/index/unanswered'
import Feed from '../components/index/feed'
import Experts from '../components/index/experts'
// import register from '../components/public/register'
import forget from '../components/public/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main_page',
      component: main,
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
    },
    // {
    //   path: '/',
    //   name: 'register',
    //   component: register
    // },
    {
      path: '/forget',
      name: '忘记密码',
      component: forget
    }
  ]
})
