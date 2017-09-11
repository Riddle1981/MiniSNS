<template>
<div class="pravite">
	<ul>
		<li v-for="val in pravitedata">
			<div class="pravitecontent"><span>{{ val.sender }}</span>:<span>{{ val.content }}</span></div>
			<span class="pravitetitle"><span>回复我的主题：</span>{{ val.title }}</span>
		</li>
	</ul>
</div>
</template>

<script>
export default{
  data () {
    return {
      act: false,
      pravitedata: {
        data1: {
          sender: 'zilong3033',
          title: '西安花园俱乐部',
          content: '很好啊'
        },
        data2: {
          sender: 'lasped',
          title: '对还是我，25岁打算组学c++的我，直播自学过的所有',
          content: '可以的'
        },
        data3: {
          sender: 'huhansan',
          title: '全是我的小号',
          content: '是的我是的'
        }
      }
    }
  },
  created () {
    this.$http.get('get/message/user:id').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.notifydata = response.data
      }
    })
  },
  method: {
  }
}
</script>

<style scoped>
ul{
	list-style-type: none;
	color: black;
}
li {
	display: block;
	height: 100px;
	width: 920px;
}
.pravite .pravitecontent{
	padding: 20px 0 5px 20px;
	font-size: 14px;
	color: #2d64b3;
}
.pravite .pravitetitle {
	margin-top: 20px;
	display: inline-block;
	font-size: 16px;
	margin-left: 20px;
}
.pravite .pravitetitle span{
	color: rgb(152,152,152);
}

.pravite ul li:hover {
	background: rgb(249,249,249);
}
.pravite ul li:after {
	margin-top: 20px;
	width: 920px;
  content: '';
  border-bottom: 1px dashed #ccc;
  display:block;
}
</style>
