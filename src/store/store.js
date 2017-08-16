import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
vue.use(vuex)
export default new vuex.Store({
  state: {
    mystatus: '登录/注册',
    seen: true
  },
  actions,
  mutations: {
    test (state, uid) {
      state.mystatus = uid
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
