<template>
<div class="main">
    <div id="cover"></div><!--遮盖层-->

    <div id="container">
        <div id="login-view">
            <div class="view-header">
                <h4 class="header-title">登录</h4>
                 <img v-on:click="closeWindow" class="close">
            </div>
            <div class="view-content">

                <form>
                    <fieldset>
                        <legend>注册</legend>
                        <p>
                            <label>名字</label>
                            <input v-model="userName" v-on:change="userVerification" type="text" placeholder="真实姓名或常用昵称">
                            <span>{{ nameTip }}</span>
                        </p>

                        <!-- <p>
                            <input v-on:click="telephoneRegister" checked="checked" type="radio" name="registerMethod" title="用户名注册">用户名注册
                            <input v-on:click="emailRegister" type="radio" name="registerMethod" title="用Email注册">用Email注册
                        </p>

                        <p id="show">
                            <input v-model="telephone" v-on:blur="telephoneVerification" type="text" placeholder="仅支持大陆手机号">
                            <span>{{ telephoneTip }}</span><br>
                            <input id="verificationCode" type="text" placeholder="短信验证码">
                            <button v-on:click="getVerificationCode" class="sendVerificationCode">获取验证码</button><br>
                        </p> -->

                        <p id="hide">
                            <label>邮　箱</label>
                            <input v-model="email" v-on:blur="emailVerification" type="email" placeholder="请输入邮箱">
                            <span>{{ emailTip }}</span>
                        </p>

                        <p>
                            <label>密　码</label>
                            <input v-model="pass" v-on:blur="passVerification" type="password" placeholder="不少于6位">
                            <span>{{ passTip }}</span>
                        </p>

                        <input class="btn" type="submit" value="注册" @click="register">
                    </fieldset>
                </form>

                <form>
                    <fieldset>
                        <legend>登录</legend>                
                        <p>
                            <label>手机或Email</label>
                            <input v-model="name" type="text" placeholder="11位手机号或Email">
                        </p>
                        <p>
                            <label>密　码</label>
                            <input v-model="psd" type="password" placeholder="密码">
                        </p>

                        <p>
                            <input type="checkbox">记住登录状态
                            <router-link to="forget" class="pdForget">忘记密码？</router-link>
                        </p>

                        <input class="btn" type="submit" value="登录" @click="vaildate">

                        <div class="quick-logon">
                              <h6>快速登录</h6>
                              <img src="../../assets/ellipsis.png" height="32" width="32" alt="其他方式">
                              <img src="../../assets/google.png" height="32" width="32" alt="Google">
                              <img src="../../assets/github.png" height="32" width="32" alt="github">
                              <img src="../../assets/weibo.png" height="32" width="32" alt="微博">
                              <img src="../../assets/wechat.png" height="32" width="32" alt="微信">
                              <img src="../../assets/QQ.png" height="32" width="32" alt="QQ">
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

        <div id="forget-pass-view">
            <p>
                <label for="verCode"></label><br>
                <input id="verCode" type="text">
                <button v-on:click="getVerificationCode" class="sendVerificationCode">获取验证码</button><br>
            </p>
        </div>
    </div>
</div>
</template>

<script>
    import store from '../../store/store.js'
    export default {
      data () {
        return {
          userName: '',
          nameTip: '',
          telephone: '',
          telephoneTip: '',
          pass: '',
          passTip: '',
          email: '',
          emailTip: '',
          name: '',
          psd: ''
        }
      },
      methods: {
        register: function () {
          var users = {
            email: this.email,
            psd: this.pass,
            name: this.userName
          }
          var oContainer = document.getElementById('container')
          var oCover = document.getElementById('cover')

          oContainer.style.display = 'none'
          oCover.style.display = 'none'
          history.back()
          store.commit('register', users)
          store.dispatch('email')
        },
        /**
         * 关闭登录窗口
         * @return {[type]} [description]
        */
        closeWindow: function () {
          var oContainer = document.getElementById('container')
          var oCover = document.getElementById('cover')

          oContainer.style.display = 'none'
          oCover.style.display = 'none'
          history.back()
        },

        /**
         * 用户验证
         * @return {[type]} [description]
        */
        userVerification: function () {
          var regName = /^[a-zA-z]\w{3,15}$/

          if (this.userName.length === 0) {
            this.nameTip = '用户名不能为空'
          } else if (!regName.test(this.userName)) {
            this.nameTip = '字母、数字、下划线组成，字母开头，4-16位'
          } else {
            this.nameTip = ''
          }
        },

        // /**
        //  * 电话验证
        //  * @return {[type]} [description]
        // */
        // telephoneVerification: function () {
        //   var regPhone = /\d{11}/

        //   if (!regPhone.test(this.telephone)) {
        //     this.telephoneTip = '请输入11位手机号'
        //   } else {
        //     this.telephoneTip = ''
        //   }
        // },

        /**
         * 邮箱验证
         * @return {[type]} [description]
        */
        emailVerification: function () {
          var regEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/

          if (!regEmail.test(this.email)) {
            this.emailTip = '邮箱格式不正确'
          } else {
            this.emailTip = ''
          }
        },

        /**
         * 密码验证
         * @return {[type]} [description]
        */
        passVerification: function () {
          if (this.pass.length === 0) {
            this.passTip = '密码不能为空'
          } else {
            this.passTip = ''
          }
        },

        // /**
        //  * 电话注册方式
        //  * @return {[type]} [description]
        // */
        // telephoneRegister: function () {
        //   var oHide = document.getElementById('hide')
        //   var oShow = document.getElementById('show')

        //   oHide.style.display = 'none'
        //   oShow.style.display = 'block'
        // },

        // /**
        //  * 邮箱注册方式
        //  * @return {[type]} [description]
        // */
        // emailRegister: function () {
        //   const oHide = document.getElementById('hide')
        //   const oShow = document.getElementById('show')

        //   oHide.style.display = 'block'
        //   oShow.style.display = 'none'
        // },

        /**
         * 记住密码
         * @return {[type]} [description]
        */
        rememberLoginStatus: function () {

        },

        /**
         * 获取验证码
         * @return {[type]} [description]
        */
        getVerificationCode: function () {

        },
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
      }
    }
</script>

<style scoped>
#cover {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    filter:alpha(opacity=50);
    opacity: 0.5;
}
#container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 560px;
    margin-left: -450px;
    margin-top: -280px;
    z-index: 1050;
    background: #fff;
    border-radius: 6px;
    border: 0;
    outline: 0;
}
.view-header {
    padding: 15px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    min-height: 25px;;
    background: #f3f3f3;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.header-title {
    float: left;
    width: 200px;
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
   background: url("../../assets/close.png");
}
.view-content {
    display: inline-block;
}
.view-content form {
    float: left;
    margin-left: 90px;
}
fieldset {
    border: none;
    text-align: left;
    margin: 20px auto;
}
legend{
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}
p {
    margin: 14px 0;
}
label {
    display: block;
    margin: 8px 0;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
}
input {
    padding: 6px 8px;
    font-size: 14px;
    color: #555;
    background: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
          -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
             transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input:focus {
    border-color: rgba(82, 168, 236, 0.8);
    outline: 0;
    outline: thin dotted \9;
    /* IE6-9 */
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
       -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
             box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
 input[type="text"],
 input[type="password"],
 input[type="email"] {
     display: block;
     width: 284px;
     height: 34px;
 }
input[type="search"] {
    display: block;
    width: 280px;
    height: 30px;
}
input[type="search"]:focus {
    width: 500px;
    transition: width ease-in-out 0.2s;
}
span {
    display: block;
    font-size: 12px;
    color: #F00;
    height: 14px;
}
#hide {
    /* display: none; */
}
#verificationCode {
    display: inline-block;
    width: 180px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.sendVerificationCode {
    display: inline-block;
    width: 100px;
    height: 34px;
    text-align: center;
    border: 1px solid #ccc;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
    background: #fff;
}
#forget-pass-view {
    display: none;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    height: 280px;
    margin-top: -140px;
    margin-left: -200px;
    background: #fff;
}
input[type="checkbox"] {
    margin-top: 10px;
}
#container .pdForget {
    float: right;
    line-height: 35px;
    color: #006633;
    font-size: 14px;
    text-decoration: none;
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
.quick-logon {
    margin-top: 50px;
}
img {
    margin: 0 5px;
    float: right;
    cursor: pointer;
}
</style>
