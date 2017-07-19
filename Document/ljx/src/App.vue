<template>
  <div id="app">
    <myhead></myhead>
    <router-view></router-view>

  </div>
</template>

<script>

  import oHead from './components/public/head.vue'
export default {
    name: 'app',
    components: { myhead: oHead }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
