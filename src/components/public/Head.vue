/**
* 首部导航
* Created by Riddle
* 2017/7/18
**/
<template>
  <div class="navigation">
     <div class="logo">
       <img id="logo" src="../../assets/logo.png">
     </div>
     <div class="search">
       <input type="text"/>
     </div>
     <ul id="list">
       <li class="item">
         <img src="../../assets/home.png"/>
         <span>首页</span>
       </li>
       <li class="item">
         <img src="../../assets/edit.png"/>
         <span>发帖</span>
       </li>
       <li class="item">
         <img src="../../assets/message2.png"/>
         <span>消息</span>
       </li>
       <li class="item">
         <img src="../../assets/user.png"/>
         <router-link to="register">
           <span>登录/注册</span>
         </router-link>

       </li>
     </ul>
  </div>
</template>

<script>

</script>

<style scoped>
  .navigation{
    top: 0px;
    position: fixed;
    width: 100%;
    height: 60px;
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
    margin-top: 15px;
    margin-left: 240px;
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
    display: inline-block;
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
