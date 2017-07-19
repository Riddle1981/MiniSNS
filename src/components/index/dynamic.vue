<template lang="html">
  <div class="dynamic">
    <div class="person-avatar">
      <a href="/" class="image"><img :src="datainfo.image"></a>
    </div>
    <div class="person-info">
      <p class="sentence">{{ datainfo.sentence }}</p>
      <a href="/" class="title">{{ datainfo.title}}</a>
      <p class="description">{{ datainfo.description }}</p>
      <ul>
        <li v-for="data in datainfo.muted">{{ data.name }} {{ data.count }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamic',
  data () {
    return {

    }
  },
  props: ['datainfo']
}
</script>

<style lang="less">
  .dynamic{
    box-sizing: border-box;
    width: 60%;
    height: 90px;
    margin-left: 10%;
    a{
      text-decoration: none;
    }
    .sentence{
      color: #999;
      font-size: 13px;
    }
    .person-avatar{
      float:left;
      .image img{
        width: 40px;
        height: 40px;
        background-size: cover;
        border-radius: 50%;
      }
    }
    .person-info{
      text-align: left;
      margin-left: 79px;
      .title{
        color: #009a61;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 8px;
      }
      .description{
        color: #333;
        font-size: 14px;
        line-height: 1.6;
        overflow: hidden;
        margin-bottom: 8px;
        cursor: pointer;
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
          padding-right: 15px;
          font-size: 13px;
          color:#999;
        }
      }
    }
  }
</style>
