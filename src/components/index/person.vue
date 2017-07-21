<template lang="html">
  <div class="person">
    <div class="person-avatar">
      <a href="/" class="image"><img :src="datainfo.image"></a>
    </div>
    <div class="person-info">
      <a href="/" class="name">{{ datainfo.name}}</a>
      <a href="/" class="quiz">向他提问</a>
      <p class="description">{{ datainfo.description }}</p>
      <p class="job">{{ datainfo.job }}</p>
      <ul>
        <li v-for="data in datainfo.tags" class="tags themeColor">{{ data }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {

    }
  },
  props: ['datainfo']
}
</script>

<style lang="less" scoped>
  .person{
    box-sizing: border-box;
    width: 80%;
    height: 90px;
    margin:20px auto;
    a{
      text-decoration: none;
    }
    .name{
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2;
      color: #333;
    }
    .description{
      color: #999;
      font-size: 13px;
    }
    .job{
      font-size: 14px;
      color: #666;
      margin-bottom: 5px;
    }
    .person-avatar{
      float:left;
      .image img{
        width: 64px;
        height: 64px;
        background-size: cover;
        border-radius: 50%;
      }
    }
    .person-info{
      text-align: left;
      margin-left: 79px;
      .quiz{
        display: block;
        float: right;
        color: #666;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      p{
        margin: 0;
      }
      ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
          display: inline-block;
        }
        .tags{
          display: inline-block;
          padding: 0 8px;
          background-color: rgba(38, 147, 233, 0.2);
          height: 24px;
          line-height: 24px;
          font-weight: normal;
          font-size: 13px;
          text-align: center;
          margin-right: 5px;
        }
      }
    }
  }
</style>
