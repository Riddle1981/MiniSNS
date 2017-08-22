<template>
  <div id="commend">
    <div id="content">
      <p>热门文章</p>
      <hr/>
      <ul>
        <li v-for="title in titles">{{title.text}}</li>
      </ul>
      <hr/>
      <div class="more">查看更多</div>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'commend',
    data () {
      return {
        titles: [
          {text: '深度学习在情感分析中的应用 '},
          {text: '微API设计模式 '},
          {text: '微信 Android 视频编码爬过的那些坑'},
          {text: 'iOS 工程自动化 - 思路整理 '},
          {text: '面向大数据的分布式调度 '},
          {text: '你需要理解的 Java 反射机制知识总结 '},
          {text: 'PostgreSQL服务器管理：服务器设置和操作 '},
          {text: '当AI联姻安全 '},
          {text: 'IRF2配置与管理 '},
          {text: 'Kotlin 为何能比 Java 做得更好？ '}
        ]
      }
    }
  }
</script>
<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }
  hr{
    opacity: 0.5;
    filter: alpha(opacity=30, finishopacity=0,style=1);
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
  li{
    text-decoration: none;
    list-style: none;
    font-size: 14px;
    font-weight: 100;
    margin-top: 10px;
  }
  ul{
    margin-top: 15px;
  }
  #commend{
    margin-top: 10px;
    border-radius: 5px;
    position: relative;
    top: 10px;
    width: 100%;
    border: 1px solid #cccccc;
  }
  #content{
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;
  }
  p{
    font-weight: 700;
    font-size: 18px;
  }
  .more{
    text-align: center;
    height: 35px;
    vertical-align: center;
    margin-top: 5px;
  }
</style>
