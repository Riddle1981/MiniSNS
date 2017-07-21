/**
* 页尾
* Created by Riddle
* 2017/7/18
**/
<template>
  <div class="my_footer">
    <p class="footer_logo">©MiniSNS</p>
    <ul class="footer_right">
      <li><a href="#">论坛指南</a></li>
      <li><a href="#">建议反馈</a></li>
      <li><a href="#">加入论坛</a></li>
      <li><a href="#">论坛协议</a></li>
      <li><a href="#">联系我们</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'myfooter',
    data () {
      return {
        time: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
  .my_footer{
    position: absolute;
    left:50%;
    bottom: 10px;
    width: 60%;
    border-top: 1px solid #BBBBBB;
    font: 13px 'Helvetica Neue',Helvetica,Arial,sans-serif;
    color: #BBBBBB;
    transform: translateX(-50%);
  }
  .footer_logo {
    margin-left: 1%;
    cursor: pointer;
    display: inline-block;
    letter-spacing: 2px;
  }
  .footer_right {
    color: #999999;
    list-style-type: none;
    display: inline-block;
    float: right;
  }
  .footer_right li {
    cursor: pointer;
    display: inline-block;
  }
  .footer_right li + li::before {
    content: "•";
    margin-right: 3px;
    color: #BBBBBB;
    padding: 0px 3px;
  }
  .footer_right li a{
    text-decoration: none;
    color: #BBBBBB;
  }
</style>
