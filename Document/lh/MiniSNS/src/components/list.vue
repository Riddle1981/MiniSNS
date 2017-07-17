<template lang="html">
  <div class="list">
    <ul class="select">
      <li><router-link to="/new">最新回答</router-link></li>
      <li><router-link to="/hottest">最热回答</router-link></li>
      <li><router-link to="/unanswered">等待回答</router-link></li>
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
  components: {
    vueInput: myInput
  }
}
</script>

<style lang="less">
  .list{
    margin-top: 20px;
    .select{
      width: 80%;
      margin: auto;
      list-style: none;
      text-align: left;
      padding:0;
      border-bottom: 1px solid #ddd;
      li{
        display: inline-block;
        a{
          text-decoration: none;
          color: #009a61;
        }
        a:hover,a:focus{
          color:#555;
          border:1px solid #ddd;
        }
        a:focus,a:active{
          border-bottom-color: #fff;
        }
      }
    }
  }
</style>
