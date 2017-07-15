<template>
  <div id="app">
    <myhead></myhead>
  </div>
</template>

<script>

  import myHead from './components/public/myHead.vue'
export default {
    name: 'app',
    components: { myhead: myHead }
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
