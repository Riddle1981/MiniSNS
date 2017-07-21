<template lang="html">
  <div class="new">
    <vue-input :datainfo="data" class="list_section" v-for="data in datalist" :key="data.content"></vue-input>
  </div>
</template>

<script>
import myInput from './input.vue'

export default {
  name: 'new',
  data () {
    return {
      datalist: {
        info_1: {
          votes: 1,
          answer: 0,
          view: 23,
          author: 'Whalefallsea',
          time: '1分钟前',
          content: 'elementUI表格动态变色问题',
          tags: [
            'elementU-ui',
            'vue.js',
            'iview'
          ]
        },
        info_2: {
          votes: 0,
          answer: 2,
          view: 67,
          author: '稳稳',
          time: '3分钟前',
          content: '最终生成的jsBundle文件压缩问题',
          tags: [
            'javascript',
            'vue.js',
            'weex'
          ]
        },
        info_3: {
          votes: 6,
          answer: 0,
          view: 102,
          author: 'wy2016',
          time: '7分钟前',
          content: 'uc浏览器打开app',
          tags: [
            'javascript'
          ]
        }
      }
    }
  },
  components: {
    vueInput: myInput
  }
}
</script>

<style lang="less" scoped>
  .new{
    margin-top: 20px;
    .list_section{
      margin-top: 10px;
    }
  }
</style>
