<template>
<div class="notify">
	<div class="notifytitle">
		<span class="title">标题</span>
		<span class="writer">作者</span>
		<span class="update">更新状态</span>
		<span class="deadline">最后更新时间</span>
	</div>
	<div class="content">
		<div class="notifycontent" v-for="date in notifydata">
			<span class="title">{{ date.title }}<span class="tags" v-for="tag in date.tags">{{ tag }}</span></span>
			<span class="writer">{{ date.writer }}</span>
			<span class="update"><span v-for="update in date.update">{{ update }}</span></span>
			<span class="deadline"><input readonly class="contentdeadline" v-model="this.dateline = date.deadline"></span>
		</div>		
	</div>
</div>
</template>

<script>
  export default{
    data () {
      return {
        notifydata: {
          notify1: {
            title: '西安花园城市俱乐部',
            tags: ['未添加标签'],
            writer: 'linhao',
            update: ['已删除', '取消收藏'],
            deadline: ['2017', '4', '2']
          },
          notify2: {
            title: '对还是我，25岁打算组学c++的我，直播自学过的所有',
            writer: 'meito',
            tags: [],
            update: ['查看更新'],
            deadline: ['2017', '4', '2']
          },
          notify3: {
            title: '全是我的小号',
            writer: '逢场作戏',
            tags: [],
            update: ['已删除', '取消收藏'],
            deadline: ['2017', '4', '2']
          }
        }
      }
    },
    computed: {
    },
    created () {
      this.$http.get('/get/user:id').then((response) => {
        response = response.body
        if (response.errno === 0) {
          this.notifydata = response.data
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .notify .notifytitle{
    width:920px;
    background: rgb(243,243,243);
  }
  span{
    font-size:16px;
    display: inline-block;
    margin: 0 10px;
		height: 16px;
  }
  .notify .notifytitle .title,.notify .content .notifycontent .title{
    padding-left:20px;
	  width: 460px;
  }
  .writer,.deadline,{
		width: 100px;
		padding: 4px;
	}
  .update{
    padding: 0;
    margin: 0;
    width: 140px;
  }
  .notify .content .notifycontent{
    height: 80px;
  }
  .notify .content .notifycontent:after {
    width:920px;
    margin-top:10px;
    content: '';
    border-bottom: 1px dashed #ccc;
    display:block;
  }
  .notify .content .notifycontent .title{
    line-height: 80px;
  }
  .notify .content .notifycontent .update{
    display: inline-block;

  }
  .notify .content .notifycontent .update span{
    font-size:14px;
  }
  .notify .content .notifycontent .title .tags{
    float: right;
  }
  .notify .content .notifycontent .deadline .contentdeadline{
    display: block;
    border: 0;
  }
</style>
