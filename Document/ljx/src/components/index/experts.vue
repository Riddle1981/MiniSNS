<template lang="html">
  <div class="experts">
    <div class="list" v-for="data in datalist">
      <vue-input :datainfo="data"></vue-input>
    </div>
  </div>
</template>

<script>
import myPerson from './person.vue'

export default {
  name: 'experts',
  data () {
    return {
      datalist: {
        info_1: {
          image: 'https://sfault-avatar.b0.upaiyun.com/324/771/3247715052-56fce46b2ae70_huge128',
          name: '公子',
          description: '奇舞团 前端工程师',
          job: '擅长SVG动画，前端工程化，NodeJS方向',
          tags: [
            'react.js',
            'atom',
            'git',
            'nginx',
            'linux',
            'node.js',
            'php',
            'javascript'
          ]
        },
        info_2: {
          image: 'https://sfault-avatar.b0.upaiyun.com/324/771/3247715052-56fce46b2ae70_huge128',
          name: 'justjavac',
          description: '',
          job: 'Whalefallsea',
          tags: [
            'elementU-ui',
            'vue.js',
            'iview'
          ]
        },
        info_3: {
          image: 'https://sfault-avatar.b0.upaiyun.com/324/771/3247715052-56fce46b2ae70_huge128',
          name: '公子',
          description: '',
          job: 'Whalefallsea',
          tags: [
            'elementU-ui',
            'vue.js',
            'iview'
          ]
        }
      }
    }
  },
  components: {
    vueInput: myPerson
  }
}
</script>

<style lang="less">
  .experts{
    width: 80%;
    margin: 20px auto 0;
    .list{
      padding-top: 10px;
      margin: 0;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
