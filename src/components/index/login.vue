<template>
  <div id="side">
    <div class="login" v-if="seen">
      <form action="#" class="form">
        <fieldset class="fieldset">
          <legend class="legend">账号登录</legend>
          <p>
            <label>手机或Email</label>
            <input v-model="name" type="text" placeholder="11位手机号或Email">
          </p>
          <p>
                <label>密　码</label>
                <input v-model="psd" type="password" placeholder="密码">
          </p>
          <p>
            <input type="checkbox" name="" class="zddl">自动登录
            <router-link to="/forget" class="pdForget themeColor">忘记密码？</router-link>
          </p>
          <input id="btn"  type="button" @click="vaildate" value="登录">
          <p id="my" style="color:red;">{{hint}}</p>
        </fieldset>
      </form>
    </div>
    <div id="rightContent" v-else >
      <div class="logins" >
        <div class="logined">
          <div class="Cover">
          </div>
          <div class="sculpture">
            <img src="../../../user/2.jpg" height="80" width="80">
          </div>
          <div class="message">
            <span class="pet">{{ pet }}</span>
            <span class="level">{{ level }}</span>
          </div>
          <div class="info">
            <div class="span">
              <span><strong>{{ follower }}</strong></span>
              <span class="content">粉丝</span>
            </div>
            <div class="span">
              <span><strong>{{ following }}</strong></span>
              <span class="content">关注</span>
            </div>
            <div class="span">
              <span><strong>{{ anum }}</strong></span>
              <span class="content">文章</span>
            </div>
          </div>
        </div>
      </div>
      <commend></commend>
    </div>
  </div>
</template>

<script>
  import store from '../../store/store.js'
  import commend from './commend.vue'
  export default {
    name: 'side',
    data () {
      return {
        hint: '',
        pet: '',
        level: '',
        fans: '',
        follow: '',
        content: '',
        psd: '',
        name: ''
      }
    },
    computed: {
      seen () {
        return store.state.seen
      },
      follower () {
        return store.state.follower
      },
      following () {
        return store.state.following
      },
      anum () {
        return store.state.anum
      }
    },
    methods: {
      vaildate: function () {
        var remember = document.querySelector('input[type="checkbox"]')
        var psd = this.psd
        var name = this.name
        store.commit('vname', name)
        store.commit('vpsd', psd)
        if (remember.checked === true) {
          store.commit('remember', true)
        }
        store.dispatch('vaildate')
      }
    },
    components: {
      commend: commend
    }
  }
</script>

<style scoped>
  .zddl{
    margin-left: 0px;
  }
  .login {
    margin-left: 70px;
    margin-top: 70px;
    float: left;
    width: 300px;
    height: 320px;
    /*border: 1px solid #ccc;*/
    text-align: center;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  .form {
    display: inline-block;
  }
  .fieldset{
    border: none;
  }
  .legend {
    margin: 20px auto;
  }
  p {
    margin: 10px 0;
  }
  label {
    display: block;
    margin: 8px 0;
    font-weight: bold;
    font-size: 14px;
    text-align: left;
  }
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    display: inline-block;
    width: 200px;
    height: 15px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42858;
    color: #555;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
  .login input[type="checkbox"] {
    margin-top: 10px;
    margin-left: -70px;
  }
  .pdForget {
    float: right;
    line-height: 35px;
    font-size: 14px;
    text-decoration: none;
  }
  #btn {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 98px;
    margin: 20px 0;
    font-size: 14px;
    line-height: 1.42858;
    border-radius: 4px;
    color: #fff;
    user-select: none;
    background: #0073ce;
  }
  #btn:hover {
    padding: 6px 98px;
    background: #0F88E8;
    border-color: #0F88E8;
  }
  #btn:active {
    outline: 0;
  }
  #rightContent {
    width: 235px;
    position: absolute;
    top: 10%;
    left: 70.7%;
  }
  .logins {
    display: inline-block;
    margin-top: 30px;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  .Cover {
    display: inline-block;
    background: #40B883;
    width: 235px;
    height: 80px;
  }
  .sculpture{
    position: absolute;
    top: 10%;
    left: 50%;
    margin-left: -40px;
    z-index: 1;
  }
  .sculpture img{
    border-radius: 50%;
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
