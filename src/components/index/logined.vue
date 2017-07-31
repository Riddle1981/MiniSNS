<template>
    <div class="login">
        <div class="logined">
          <div class="Cover"> 
          </div>
          <div class="Avatar">
            <img>
          </div>
          <div class="message">
            <span class="pet">{{ pet }}</span>
            <span class="level">{{ level }}</span>
          </div>
          <div class="info">
            <div class="span">
              <span><strong>{{ fans }}</strong></span>
              <span class="content">粉丝</span>
            </div>
            <div class="span">
              <span><strong>{{ follow }}</strong></span>             
              <span class="content">关注</span>
            </div>
            <div class="span">
              <span><strong>{{ content }}</strong></span>
              <span class="content">文章</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'logined',
      data () {
        return {
          pet: 'Lasped',
          level: 'max',
          fans: 56,
          follow: 112,
          content: 67
        }
      },
      methods: {
      }
    }
</script>

<style scoped>
    .login {
          position: absolute;
          top: 10%;
          left: 70.7%;
          display: inline-block;
          margin-top: 30px;
          text-align: center;
          border-radius: 6px;
          border: 1px solid #ccc;
    }
    .Cover {
      display: inline-block;
      background: #009A4A;
      width: 288px;
      height: 100px;
    }
    .Avatar {
      display: inline-block;
      position: absolute;
      top: 22%;
      left: 104px;
      z-index: 1;
    }
    .Avatar img {
      background-image: url('../../assets/userph.png');
      width: 80px;
      height: 80px;
      border-radius: 100px;
    }
    .message {
      display: inline-block;
      margin-top: 32px;
      display: block;
      margin-right: 10px;
      text-align: center;
    }
    .message .pet {
      display: inline-block;
      font-size: 20px;
      margin-left: -10%;
    }
    .message .level {
      display: inline-block;
      padding-left: 6px;
      padding-right: 3px;
      color: #fff;
      background: orange;
      border-radius: 6px;
      margin: 5px;
    }
    .info {
      width: 100%;
      display: inline-block;
      text-align: center;
    }
    .info .span {
      float: left;
      width: 30%;
      height: 70px;
      margin:0;
    }
    .info .span:nth-child(2) {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    .info span{
      display: inline-block;
      font-size:20px;
      text-align: center;
      width: 100%;
      height: 30px;
      line-height: 25px;
      margin: 0;
      border: 0;
    }
    .info .span .content{
      display: inline-block;
      font-size:13px;
      text-align: center;
      height: 20px;
      line-height: 20px;
    }
</style>
