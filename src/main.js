// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import App from './App'
import store from './store/store'
import router from './router'
import 'normalize.css'

Vue.config.productionTip = false
Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
