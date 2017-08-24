<template>
  <div class="post">
    <div id="post-cover"></div>
    <div id="post-container">
      <div class="view-header">
        <h4 class="header-title">发帖</h4>
        <img class="close" v-on:click="closePostWindow" src="../../assets/close.png" width="16" height="16">
      </div>

      <div class="post-content">
        <h2>写下你的问题</h2>
        <span>描述精确的问题更易得到解答</span>
        <textarea name="" id="" placeholder="问题标题"></textarea>

        <textarea name="" id="" placeholder="添加话题"></textarea>
        <label>问题描述（可选）：</label>
        <textarea name="" id="" placeholder="问题背景、条件等详细信息" rows="5"></textarea>
        <input type="checkbox" name="" id="">匿名提问
        <input class="btn" type="submit" value="提交问题">
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        closePostWindow: function () {
          var oContainer = document.getElementById('post-container')
          var oCover = document.getElementById('post-cover')

          // 隐藏发帖部分
          oContainer.style.display = 'none'
          oCover.style.display = 'none'
          history.back()
        }
      }
    }
</script>

<style>
#post-cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  filter:alpha(opacity=50);
  opacity: 0.5;
}
#post-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 500px;
  margin-left: -300px;
  margin-top: -250px;
  z-index: 1050;
  background: #fff;
  border-radius: 6px;
  text-align: left;
  border: 0;
  outline: 0;
}
.view-header {
    padding: 12px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    min-height: 25px;
    background: #f3f3f3;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.header-title {
    float: left;
    width: 100px;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.close {
   float: right;
   width: 16px;
   height: 16px;
   line-height: 25px;
   font-size: 21px;
   cursor: pointer;
}
#post-container h2 {
  text-align: center;
  margin: 20px 0;
}
.post-content span {
  display: block;
  margin: 12px 0;
  text-align: center;
}
.post-content {
  width: 515px;
  margin: 0 auto;
}
.post-content textarea {
  display: block;
  width: 515px;
  margin: 10px 0 20px;
  padding: 6px 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.post-content input[type="checkbox"] {
  margin-right: 10px;
}
.btn {
    display: inline-block;
    float: right;
    text-align: center;
    cursor: pointer;
    border: 1px solid #008151;
    white-space: nowrap;
    padding: 6px 20px;
    font-size: 14px;
    border-radius: 6px;
    color: #fff;
    background: #009a61;
}
.btn:hover {
    padding: 6px 20px;
    background: #006741;
    border-color: #00432a;
}
.btn:active {
    outline: 0;
}
</style>
