<template>
    <div class="hotsearch">
      <div class="double">
        <span class="hot">热门话题</span>
        <span class="change">换一批</span><img src="">
      </div>
      <hr>
      <div class="content">
        <ul>
          <li v-for="val in list"><a href="#"># {{ val.name }} #</a></li>
        </ul>
      </div>
      <div class="more">
        <a href="#">查看更多 ></a>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          list: [
            {
              name: '非洲小伙被热哭'
            },
            {
              name: '赵丽颖笑称怕杨紫'
            },
            {
              name: '惊现禁中国人公告'
            },
            {
              name: '王心凌私密照外泄'
            },
            {
              name: '潘粤明牵手女演员'
            },
            {
              name: '大妈用杯子挡电梯'
            }
          ]
        }
      },
      methods: {
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  .hotsearch {
    position: absolute;
    left: 70.7%;
    top: 58%;
    border: 1px solid #ccc;
  }
  .hotsearch .double span{
    border: 1px solid #ccc;
    display: inline-block;
  }
  .hotsearch .double {
    width: 288px;
    height: 40px;
    text-align:justify ;
  }
  .hotsearch .double .hot {
    border : 0;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left: 40px;
  }
  .hotsearch .double .change {
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 40px;
    border : 0;
  }
  .hotsearch .content {
    display: inline-block;
    margin-top: 20px;
  }
  li{
    display: block;
    margin-left: 30px;
  }
  li:hover {
    background: #ccc;
  }
  .hotsearch .more a{
    display: inline-block;
    margin-left: 60px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
</style>
