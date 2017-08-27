<template>
  <div id="app">
    <myhead></myhead>
    <router-view></router-view>
    <myfooter :message="hello" @sendToP="hi"></myfooter>
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
    data () {
      return {
        hello: '123'
      }
    },
    components: {
      myhead: head,
      myfooter: footer
    },
    methods: {
      hi: function (six) {
        console.log(six)
      }
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
