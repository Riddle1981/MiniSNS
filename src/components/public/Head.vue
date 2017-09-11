/**
* 首部导航
* Created by Riddle
* 2017/7/18
**/
<template>
  <div class="navigation" id="navigation">
     <div class="logo" >
       <img id="logo" src="../../assets/logo.png">
     </div>
     <div class="search">
       <input type="text"/>
     </div>
     <ul id="list">
       <li class="item">
         <img src="../../assets/home.png"/>
         <router-link to="/" style="text-decoration: none;color: black">
           <span >首页</span>
         </router-link>
       </li>
       <li class="item">
         <img src="../../assets/edit.png" style="text-decoration: none;color: black"/>
         <router-link to="post">发帖</router-link>
       </li>
       <li class="item">
         <img src="../../assets/message2.png"/>
         <router-link to="news"><span>消息</span>
         </router-link>
       </li>
       <li v-if="login" class="item" >
         <img src="../../assets/user.png"/>
         <router-link to="register" style="text-decoration: none;color: black">
           <span >{{mystatus}}</span>
         </router-link>
       </li>
       <li v-else class="item" >
         <img src="../../assets/user.png"/>
         <router-link :to="'/user/' + mystatus" style="text-decoration: none;color: black">
           <span >{{mystatus}}</span>
         </router-link>
       </li>
     </ul>
  </div>
</template>

<script>
  import store from '../../store/store.js'
  export default{
    name: 'navigation',
    data () {
      return {
      }
    },
    computed: {
      mystatus () {
        return store.state.mystatus
      },
      login () {
        return store.state.login
      }
    },
    methods: {}
  }

</script>

<style scoped>
  #navigation{
    width: 100%;
    top:0px;
    border-top: 3px solid #40B883;
    height: 60px;
    position:absolute;
    margin-bottom: 50px;
    -webkit-box-shadow: 5px 3px 5px #e9e9e9;
    -moz-box-shadow: 5px 3px 5px #e9e9e9;
    box-shadow: 5px 3px 5px #e9e9e9;
    /*导航栏*/
  }
  .logo{
    margin-top: 15px;
    margin-left: 50px;
    float: left;
  }
  #logo{
    width: 150px;
    height: 30px;
  }
  .search{
    float: left;
    margin-top: 9px;
    margin-left: 180px;
    width: 402px;
    height: 32px;
    /*搜索*/
  }
  .search input{
    width: 400px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 4px 6px;
    background: url("../../assets/search.png") no-repeat right;
    background-size: 18px 18px;
    /*搜索输入框*/
  }
  input:focus {
    border: 1px solid #3b99fc;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
                 box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  #list{
    list-style: none;
    height: 24px;
    margin-top: 20px;
    margin-left: 150px;
    padding: 0px;
    text-align: left;
    /*列表项*/
  }
  #list li{
    float: left;
    height: 24px;
    font-size: 16px;
    margin-left: 30px;
  }
  #list li:nth-child(4){
    margin-left: 70px;
  }
  .item span {
    vertical-align: middle;
    line-height: 24px;
    /*无序列表中的标签*/
  }
  .item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    /*无序列表中的图片*/
  }
</style>
