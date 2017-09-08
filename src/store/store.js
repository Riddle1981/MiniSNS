import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
vue.use(vuex)
export default new vuex.Store({
  state: {
    mystatus: '登录/注册',
    login: true,
    seen: true,
    following: 0,
    follower: 0,
    anum: 0,
    birth: '',
    industry: '',
    autograph: '',
    vname: '',
    vpsd: '',
    remember: false,
    email: '',
    name: '',
    psd: ''
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
    },
    login (state) {
      state.login = false
    },
    vname (state, name) {
      state.vname = name
    },
    vpsd (state, psd) {
      state.vpsd = psd
    },
    rememer (state, bool) {
      state.remember = bool
    },
    register (state, user) {
      state.name = user.name
      state.psd = user.psd
      state.email = user.email
    }
  },
  getters: {
    mystatus (state) {
      console.log(state)
      return state.mystatus
    }
  }
})
