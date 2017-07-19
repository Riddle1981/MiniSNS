<template>
<div class="main">
    <!--<router-link to="login">-->
        <!--<a href="#">登录</a>-->
    <!--</router-link>-->

    <!--<a v-on:click="showlLoginView" href="#">登录-窗口</a>-->

    <div id="cover"></div><!--遮盖层-->

    <div id="container">
        <div id="login-view">
            <div class="view-header">
                <h4 class="header-title">登录</h4>
                <img v-on:click="closeWindow" class="close">
            </div>
            <div class="view-content">
                <form>
                    <legend>注册</legend>
                    <p>
                        <label>名字</label>
                        <input v-model="userName" v-on:change="userVerification" type="text" placeholder="真实姓名或常用昵称">
                        <span>{{ nameTip }}</span>
                    </p>

                    <p>
                        <input v-on:click="telephoneRegister" checked="true" type="radio" name="registerMethod">用手机号注册
                        <input v-on:click="emailRegister" type="radio" name="registerMethod">用Email注册
                    </p>

                    <p id="show">
                        <input v-model="telephone" v-on:blur="telephoneVerification" type="text" placeholder="仅支持大陆手机号">
                        <span>{{ telephoneTip }}</span><br>
                        <input id="verificationCode" type="text" placeholder="短信验证码">
                        <button v-on:click="getVerificationCode" class="sendVerificationCode">获取验证码</button><br>
                    </p>

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

                    <input class="btn" type="submit" value="注册">
                </form>

                <form>
                    <legend>登录</legend>
                        <p>
                            <label>手机或Email</label><br>
                            <input type="text" placeholder="11位手机号或Email">
                        </p>

                        <p>
                            <label>密　码</label>
                            <input type="password" placeholder="密码">
                        </p>

                        <p>
                            <input type="checkbox">记住登录状态
                            <router-link to="forget">
                                <a href="#">忘记密码？</a>
                            </router-link>
                        </p>

                        <input v-on:click="login" class="btn" type="submit" value="登录">

                        <div class="quick-logon">
                            <h6>快速登录</h6>
                            <img src="../../assets/ellipsis.png" height="32" width="32" alt="">
                            <img src="../../assets/google.png" height="32" width="32" alt="Google">
                            <img src="../../assets/github.png" height="32" width="32" alt="github">
                            <img src="../../assets/weibo.png" height="32" width="32" alt="微博">
                            <img src="../../assets/wechat.png" height="32" width="32" alt="微信">
                            <img src="../../assets/QQ.png" height="32" width="32" alt="QQ">
                        </div>
                </form>
            </div>
        </div>

        <div id="forget-pass-view">
            <p>
                <label for=""></label><br>
                <input id="verificationCode" type="text">
                <button v-on:click="getVerificationCode" class="sendVerificationCode">获取验证码</button><br>
            </p>
        </div>
    </div>
</div>
</template>

<!--<script>-->
    <!--export default {-->
        <!--data() {-->
            <!--return {-->
                <!--userName: '',-->
                <!--nameTip: '',-->
                <!--telephone: '',-->
                <!--telephoneTip: '',-->
                <!--pass: '',-->
                <!--passTip: '',-->
                <!--email: '',-->
                <!--emailTip: ''-->
            <!--}-->
        <!--},-->

        <!--methods: {-->
            <!--showlLoginView: function() {-->
                <!--var oCover = document.getElementById('cover');-->
                <!--var oContainer = document.getElementById('container');-->
                <!--var oLoginView = document.getElementById('login-view');-->

                <!--oCover.style.display = 'block';-->
                <!--oContainer.style.display = 'block';-->
                <!--oLoginView.style.display = 'block';-->
            <!--},-->

            <!--/**-->
             <!--* 关闭登录窗口-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--closeWindow: function() {-->
                <!--var oContainer = document.getElementById('container');-->
                <!--var oCover = document.getElementById('cover');-->

                <!--//-->
                <!--oContainer.style.display = 'none';-->
                <!--oCover.style.display = 'none';-->
            <!--},-->

            <!--/**-->
             <!--* 用户验证-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--userVerification: function() {-->
                <!--var regName = /^[a-zA-z]\w{3,15}$/;-->

                <!--if (this.userName.length == 0) {-->
                    <!--this.nameTip = '用户名不能为空';-->
                <!--} else if (!regName.test(this.userName)) {-->
                    <!--this.nameTip = '字母、数字、下划线组成，字母开头，4-16位';-->
                <!--} else {-->
                    <!--this.nameTip = '';-->
                <!--}-->
            <!--},-->

            <!--/**-->
             <!--* 电话验证-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--telephoneVerification: function() {-->
                <!--var regPhone = /\d{11}/;-->

                <!--if (!regPhone.test(this.telephone)) {   //11位手机号-->
                    <!--this.telephoneTip = '请输入11位手机号';-->
                <!--} else {-->
                    <!--this.telephoneTip = '';-->
                <!--}-->
            <!--},-->

            <!--/**-->
             <!--* 邮箱验证-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--emailVerification: function() {-->
                <!--var regEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;-->

                <!--if (!regEmail.test(this.email)) {     //邮箱-->
                    <!--this.emailTip = '邮箱格式不正确';-->
                <!--} else {-->
                    <!--this.emailTip = '';-->
                <!--}-->
            <!--},-->

            <!--/**-->
             <!--* 密码验证-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--passVerification: function() {-->
                <!--if (this.pass.length == 0) {-->
                    <!--this.passTip = '密码不能为空';-->
                <!--} else {-->
                    <!--this.passTip = '';-->
                <!--}-->
            <!--},-->

            <!--/**-->
             <!--* 电话注册方式-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--telephoneRegister: function() {-->
                <!--var oHide = document.getElementById('hide');-->
                <!--var oShow = document.getElementById('show');-->

                <!--oHide.style.display = 'none';-->
                <!--oShow.style.display = 'block';-->
            <!--},-->

            <!--/**-->
             <!--* 邮箱注册方式-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--emailRegister: function() {-->
                <!--var oHide = document.getElementById('hide');-->
                <!--var oShow = document.getElementById('show');-->

                <!--oHide.style.display = 'block';-->
                <!--oShow.style.display = 'none';-->
            <!--},-->

            <!--/**-->
             <!--* 记住密码-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--rememberLoginStatus: function() {-->
                <!--//TODO:保存用户的信息-->
            <!--},-->

            <!--/**-->
             <!--* 获取验证码-->
             <!--* @return {[type]} [description]-->
             <!--*/-->
            <!--getVerificationCode: function() {-->
                <!--//TODO:向手机发送验证码-->
            <!--},-->

            <!--login: function() {-->
                <!--//TODO:-->
            <!--} -->
        <!--} -->
    <!--}-->
<!--</script>-->

<style scoped>
    .main{
      display:none;
    }
    #cover {
        display: none;
        height: 800px;
        background: #333;
        filter:alpha(opacity=70);
        opacity: 0.7;
    }
    #container {
        display: none;
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
    #login-view {
        display: none;
    }
    .view-header {
        padding: 15px;
        border-bottom: 1px solid #e5e5e5;
        min-height: 25px;;
        background: #f3f3f3;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .header-title {
        margin: 0;
        float: left;
        width: 200px;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
    }
    .close {
        float: right;
        width: 16px;
        height: 16px;
        line-height: 25px;
        font-size: 21px;
        cursor: pointer;
        background: url(../../assets/close.png);
    }
    .view-content {
        text-align: center;
    }
    form {
        margin: 30px 65px;
        padding: 10px 0 0;
        float: left;
        text-align: left;
    }
    legend {
        margin: 0 auto;
        color: #777;
        font-size: 18px;
    }
    p {
        margin: 14px 0;
    }
    label {
        display: inline-block;
        margin: 8px 0;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
    }
    input[type="text"],
    input[type="password"],
    input[type="email"] {
        display: block;
        width: 284px;
        height: 20px;
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
    span {
        display: block;
        font-size: 12px;
        color: #F00;
        height: 14px;
    }
    #hide {
        display: none;
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
        border: 1px solid #ccc;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;
        background: #fff;
    }
    #forget-pass-view {
        display: none;
        text-align: center;
        display: none;
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
    #container a {
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
