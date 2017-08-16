<template>
  <div id="app">
    <myhead></myhead>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import head from './components/public/Head.vue'
  import footer from './components/public/Footer.vue'
  import store from './store/store.js'
  window.onload = function () {
    store.dispatch('test')
  }
  export default {
    name: 'app',
    components: {
      myhead: head,
      myfooter: footer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
