/**
* 首部导航
* Created by Riddle
* 2017/7/18
**/
<template>
  <div id="navigation">
     <div class="nav">
      <img id="logo" src="../../assets/logo.png">
      <input class='search' type="text" placeholder="请输入关键字"/>
      <ul id="list">
        <li class="item">
          <img src="../../assets/home.png"/>
          <router-link to="/" style="text-decoration: none;color: black">
            <span >首页</span>
          </router-link>
        </li>
        <li class="item">
          <img src="../../assets/edit.png" />
          <router-link to="editor" style="text-decoration: none;color: black">发帖</router-link>
        </li>
        <li class="item">
          <img src="../../assets/message2.png"/>
          <router-link to="news" style="text-decoration: none;color: black"><span>消息</span>
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
    margin: 0px;
    padding: 0px;
    top:0px;
    border-top: 3px solid #40B883;
    height: 60px;
    position:relative;
    -webkit-box-shadow: 5px 3px 5px #e9e9e9;
    -moz-box-shadow: 5px 3px 5px #e9e9e9;
    box-shadow: 5px 3px 5px #e9e9e9;
    /*导航栏*/
  }
  .nav{
    width: 1290px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    margin-left: -645px;
    left: 50%;
  }
  #logo{
    height: 30px;
    width: 150px;
    float: left;
    position: absolute;
    margin-top: -15px;
    top:50%;
  }
  /* .search{
    float: left;
    margin-left: 180px;
    position: absolute;
    margin-top: -15px;
    top:50%;
  } */
  .search {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: url("../../assets/search.png") no-repeat right;
    background-size: 18px 18px;
    display: block;
    left: 280px;
    position: absolute;
    margin-top: -15px;
    top:50%;
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
    display: block;
    float: right;
    height: 24px;
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
