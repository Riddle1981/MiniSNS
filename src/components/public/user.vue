<template>
  <div id="user">
    <myhead></myhead>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import head from './Head.vue'
  import footer from './Footer.vue'
  export default {
    name: 'user',
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
