<template>
	<div class="news">
		<div class="title" @click="current">
			<span><router-link to="/Notify">通知提醒</router-link></span><span><router-link to="/Private">私信消息</router-link></span>
      <router-view></router-view>
		</div>

	</div>
</template>

<script>
import Notify from './Notify.vue'
import Private from './Private.vue'

export default {
  name: 'news',
  data () {
    return {
    }
  },
  components: {
    Notify,
    Private
  },
  methods: {
    current: (event) => {
      event.target.className += ' active'
    }
  }
}
</script>

<style lang="less" scoped>
  .news{
    margin-top: 80px;
  }
    .title{
      margin-left: 100px;
    }
      span{
        display: inline-block;
      }
        a{
          text-decoration: none;
          display:block;
          padding: 10px 15px;
          color: #0F88E8;
          border-bottom:1px solid #ddd;
        }
        a:focus,a:hover{
          color:#555;
        }
      .active{
          border:1px solid #ddd;
          border-bottom: none;
        }
</style>
