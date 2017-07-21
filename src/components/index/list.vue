<template lang="html">
  <div class="list">
    <ul class="select" @click="current">
      <li><router-link to="/new">最新回答</router-link></li>
      <li><router-link to="/hottest">最热回答</router-link></li>
      <li><router-link to="/unanswered">等待回答</router-link></li>
      <li><router-link to="/feed">最新动态</router-link></li>
      <li><router-link to="/experts">付费问答</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import myInput from './input.vue'

export default {
  name: 'list',
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
    vueInput: myInput
  }
}
</script>

<style lang="less" scoped>
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
          padding: 10px 15px;
          text-decoration: none;
          outline: 0;
          color: #0F88E8;
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
</style>
