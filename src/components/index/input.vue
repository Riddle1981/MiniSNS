<template lang="html">
  <section class="input">
      <div class="info">
        <div class="info_left">
          <span class="votes">{{ datainfo.votes }} <br><small>得票</small></span>
          <span class="answer themeBgColor">{{ datainfo.answer }} <br><small>回答</small></span>
          <span class="views">{{ datainfo.view }} <br><small>浏览</small></span>
        </div>
        <div class="info_right">
          <p>{{ datainfo.author }} {{ datainfo.time }}</p>
          <h2>{{ datainfo.content }}</h2>
          <ul>
            <li v-for="tag in datainfo.tags" class="themeColor">{{ tag }}</li>
          </ul>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'input',
  data () {
    return {

    }
  },
  props: ['datainfo']
}
</script>

<style lang="less" scoped>
  .input{
    box-sizing: border-box;
  }
  .input{
    height:67px;
    padding:10px 0;
    border: 1px solid #ddd;
    margin-left: 10%;
  }
  .info_left{
    float: left;
    span{
      display: inline-block;
      width:45px;
      text-align: center;
      height: 45px;
      border-radius: 1px;
      small{
        font-size:12px;
      }
    }
    .answer{
      color: #fff;
    }
  }
  .info_right{
    overflow: hidden;
    float: left;
    padding-left: 5px;
    p{
      margin:0;
      text-align: left;
      font-size:14px;
    }
    h2{
      display: inline-block;
      margin:0;
      font-size:16px;
      text-align: left;
    }
    ul{
      display: inline-block;
      margin: 0;
      list-style: none;
      padding: 0;
      li{
        padding: 0 6px;
        margin-left: 5px;
        font-size: 13px;
        display: inline-block;
        background-color: rgba(38, 147, 233, 0.2);
      }
    }
  }
</style>
