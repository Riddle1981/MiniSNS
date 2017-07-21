<template>
  <div id="app">
    <myhead></myhead>
    <router-view></router-view>
    <login></login>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import head from './components/public/Head.vue'
  import login from './components/index/login.vue'
  import footer from './components/public/Footer.vue'
  import List from './components/index/list'
export default {
    name: 'app',
    components: {
      myhead: head,
      login: login,
      myfooter: footer,
      list: List
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
