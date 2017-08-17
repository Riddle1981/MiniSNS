import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
vue.use(vuex)
export default new vuex.Store({
  state: {
    mystatus: '登录/注册',
    seen: true,
    following: 0,
    follower: 0,
    anum: 0,
    birth: '',
    industry: '',
    autograph: ''
  },
  actions,
  mutations: {
    id (state, user) {
      state.mystatus = user.id
    },
    following (state, user) {
      state.following = user.following
    },
    follower (state, user) {
      state.follower = user.follower
    },
    anum (state, user) {
      state.anum = user.anum
    },
    seen (state) {
      state.seen = false
    }
  },
  getters: {
    mystatus (state) {
      console.log(state)
      return state.mystatus
    }
  }
})
