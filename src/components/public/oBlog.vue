/**
* 个人中心
* Created by Riddle
* 2017/7/15
**/
<template>
  <div id="myblog">
    <div id="blog">
      <blog-model></blog-model>
      <blog-model></blog-model>
      <blog-model></blog-model>
    </div>
    <div id="other">
      <div id="visitor" class="ljx-listOther">
        <p>最近来访<span>({{visitor}})</span></p>
        <hr/>
        <div id="myvisitor">
          <img src="../../../user/1.jpg">
          <img src="../../../user/2.jpg">
          <img src="../../../user/3.jpg">
          <img src="../../../user/4.jpg">
        </div>
      </div>
      <div id="following" class="ljx-listOther">
        <p>我的关注<span>({{following}})</span></p>
        <hr/>
        <div id="myfollowing">
          <img src="../../../user/8.jpg">
          <img src="../../../user/2.jpg">
          <img src="../../../user/7.jpg">
          <img src="../../../user/4.jpg">

          <img src="../../../user/1.jpg">
          <img src="../../../user/5.jpg">
          <img src="../../../user/3.jpg">
          <img src="../../../user/6.jpg">
        </div>
      </div>
      <div id="follower" class="ljx-listOther">
        <p>我的粉丝<span>({{follower}})</span></p>
        <hr/>
        <div id="myfollwer">
          <img src="../../../user/7.jpg">
          <img src="../../../user/2.jpg">
          <img src="../../../user/4.jpg">
          <img src="../../../user/2.jpg">
          <img src="../../../user/3.jpg">
          <img src="../../../user/1.jpg">
          <img src="../../../user/5.jpg">
          <img src="../../../user/8.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bmodel from './blog.vue'

  export default {
    name: 'hello',
    data () {
      return {
        visitor: '500',
        following: '200',
        follower: '200'
      }
    },
    components: {
      blogModel: bmodel
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #myblog{
    width:1170px;
    height:600px;
    margin:0 auto;
    /*整体样式*/
  }
  #blog{
    height: 600px;
    width: 855px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;
    /*博文部分*/
  }
  #other{
    height: 600px;
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;
    /*关联信息列表部分*/
  }
  .ljx-listOther{
    width: 300px;
    display: inline-block;
    margin-bottom: 30px;
    /*图片列表样式*/
  }
  .ljx-listOther p{
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    margin-left: 20px;
    margin-top: 10px;
  }
  .ljx-listOther span{
    color: #999999;
    font-size: 16px;
  }
  .ljx-listOther hr{
    width:300px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 0.3;
  }
  .ljx-listOther img{
    width: 50px;
    height: 50px;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
