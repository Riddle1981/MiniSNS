<template lang="html">
  <div class="main_page layout-lr-850300">
    <div class="list">
      <ul class="select" @click="current">
        <li><router-link to="/">最新回答</router-link></li>
        <li><router-link to="/hottest">最热回答</router-link></li>
        <li><router-link to="/unanswered">等待回答</router-link></li>
        <li><router-link to="/feed">最新动态</router-link></li>
        <li><router-link to="/experts">付费问答</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
    <vue-login></vue-login>
  </div>
</template>

<script>
import myInput from './input.vue'
import login from './login.vue'

export default {
  name: 'main_page',
  data () {
    return {
    }
  },
  methods: {
    current: (event) => {
      event.target.className += ' active'
    }
  },
  components: {
    vueInput: myInput,
    vueLogin: login
  }
}
</script>

<style lang="less" scoped>
  .layout-lr-850300{
    width: 1290px;
    position: relative;
    min-height: 400px;
    margin-left: -645px;
    padding-bottom: 100px;
    left:50%;
    .list{
      margin-top: 20px;
      float: left;
      width: 850px;
      .select{
        margin-left:10%;
        list-style: none;
        text-align: left;
        padding:0;
        border-bottom: 1px solid #ddd;
        li{
          display: inline-block;
          margin-bottom: -1px;
          a{
            display: block;
            font-weight: 700;
            padding: 10px 15px;
            text-decoration: none;
            outline: 0;
            color: #40B883;
          }
          a:hover,a:focus{
            color:#555;
          }
          a:focus,a:active{
            border:1px solid #ddd;
            border-bottom-color: #fff;
          }
        }
        .active{
          display: block;
          padding: 10px 15px;
          text-decoration: none;
          outline: 0;
          color: #555;
          border:1px solid #ddd;
          border-bottom-color: #fff;
        }
      }
    }
  }
</style>
