<template lang="html">
  <div class="feed">
    <div class="list" v-for="data in datalist">
      <vue-input :datainfo="data"></vue-input>
    </div>
  </div>
</template>

<script>
import myDynamic from './dynamic.vue'

export default {
  name: 'feed',
  data () {
    return {
      datalist: {
        info_1: {
          image: 'https://static.segmentfault.com/v-59689f47/global/img/tag_icon.svg',
          sentence: 'weekly 标签的热门文章 8月前',
          title: 'fir.im Weekly - 让 iOS 应用更加安全',
          description: '攻易防难，关于 iOS 应用安全看起来有些神秘。iOS Security , 源于@吴发伟_则平博客翻译的关于iOS安全的一系列文章，现在站点已经系统收集了大量关于 iOS 逆向、安全、反编译、静动态分析的文章。感兴趣的同学可以去看看。 同时，也推荐阅读沙梓社和吴航的《IOS应用...',
          muted: {
            support: {
              name: '赞',
              count: 0
            },
            collection: {
              name: '收集',
              count: 3
            },
            comment: {
              name: '评论',
              count: 2
            }
          }
        }
      }
    }
  },
  components: {
    vueInput: myDynamic
  }
}
</script>

<style lang="less" scoped>
  .feed{
    margin-top: 20px;
    .list{
      margin-top: 10px;
    }
  }
</style>
