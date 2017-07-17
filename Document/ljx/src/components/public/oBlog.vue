<template>
  <div id="myblog">
      <div id="blog">

      </div>
      <div id="other">
        <div id="visitor" class="list">
          <p>最近来访<span>({{visitor}})</span></p>
          <hr/>
          <div id="myvisitor">
            <img src="../../assets/1.jpg">
            <img src="../../assets/2.jpg">
            <img src="../../assets/3.jpg">
            <img src="../../assets/4.jpg">
          </div>
        </div>
        <div id="following" class="list">
          <p>我的关注<span>({{following}})</span></p>
          <hr/>
          <div id="myfollowing">
            <img src="../../assets/8.jpg">
            <img src="../../assets/2.jpg">
            <img src="../../assets/7.jpg">
            <img src="../../assets/4.jpg">
            <img src="../../assets/1.jpg">
            <img src="../../assets/5.jpg">
            <img src="../../assets/3.jpg">
            <img src="../../assets/6.jpg">
          </div>
        </div>
        <div id="follower" class="list">
          <p>我的粉丝<span>({{follower}})</span></p>
          <hr/>
          <div id="myfollwer">
            <img src="../../assets/7.jpg">
            <img src="../../assets/2.jpg">
            <img src="../../assets/4.jpg">
            <img src="../../assets/2.jpg">
            <img src="../../assets/3.jpg">
            <img src="../../assets/1.jpg">
            <img src="../../assets/5.jpg">
            <img src="../../assets/8.jpg">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      visitor: '500',
      following: '200',
      follower: '200'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }

  #myblog{
    width:1170px;
    height:600px;
    margin:0 auto;
  }
  #blog{
    height: 600px;
    width: 855px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;
  }
  #other{
    height: 600px;
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
    background: #FFF;
    border:1px solid #ccc;
    float: left;
  }
  .list{
    width: 300px;
    display: inline-block;
    margin-bottom: 30px;
  }
  .list p{
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    margin-left: 20px;
    margin-top: 10px;
  }
  .list span{
    color: #999999;
    font-size: 16px;
  }
  .list hr{
    width:300px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 0.3;
  }
  .list img{
    width: 50px;
    height: 50px;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
