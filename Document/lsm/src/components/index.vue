<template>
    <div class="main">
        <div id="cover"></div>
            <div id="container">
                <div class="header">
                    <h4 class="title">登录</h4>  
                    <img v-on:click="closeWindow" class="close">           
                </div>
                <form class="user-register">                  
                    <legend>注册</legend>
                    <p>
                        <label>名字</label>
                        <input v-model="userName" v-on:blur="userVerification" type="text" placeholder="真实姓名或常用昵称">
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
                
                <form class="user-login">
                    <legend>登录</legend>
                        <p>
                            <label for="name">手机或Email</label>
                            <input id="name" type="text" placeholder="11位手机号或Email">    
                        </p>
                        
                        <p>
                            <label for="">密　码</label>
                            <a href="#">忘记密码</a><br>
                            <input type="password" placeholder="密码">  
                        </p>

                        <p>
                            <input v-on:click="rememberLoginStatus" type="checkbox">记住登录状态
                            <input v-on:click="login" class="btn" type="submit" value="登录">
                        </p>

                        <div class="quick-logon">
                            <h6>快速登录</h6>
                            <a href="#"><img src="#" alt="Google"></a>
                            <a href="#"><img src="#" alt="github"></a>
                            <a href="#"><img src="#" alt="微博"></a>
                            <a href="#"><img src="#" alt="QQ"></a>
                            <a href="#"><img src="#" alt="微信"></a>
                        </div>
                </form>
            </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: '',
                nameTip: '',
                telephone: '',
                telephoneTip: '',
                pass: '',
                passTip: '',
                email: '',
                emailTip: ''
            }
        },

        methods: {
            /**
             * 关闭登录窗口
             * @return {[type]} [description]
             */
            closeWindow: function() {
                var oContainer = document.getElementById('container');
                var oCover = document.getElementById('cover');

                //
                oContainer.style.display = 'none';
                oCover.style.display = 'none';
            },

            /**
             * 用户验证
             * @return {[type]} [description]
             */
            userVerification: function() {
                if (this.userName.length == 0) {
                    this.nameTip = '用户名不能为空';
                } else {
                    this.nameTip = '';
                }
            },

            /**
             * 电话验证
             * @return {[type]} [description]
             */
            telephoneVerification: function() {
                var regPhone = /\d{11}/;

                if (!regPhone.test(this.telephone)) {   //11位手机号
                    this.telephoneTip = '请输入11位手机号';
                } else {
                    this.telephoneTip = '';
                }
            },

            emailVerification: function() {
                var regEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

                if (!regEmail.test(this.email)) {     //邮箱
                    this.emailTip = '邮箱格式不正确';
                } else {
                    this.emailTip = '';
                }
            },

            /**
             * 密码验证
             * @return {[type]} [description]
             */
            passVerification: function() {
                if (this.pass.length == 0) {
                    this.passTip = '密码不能为空';
                } else {
                    this.passTip = '';
                }
            },

            /**
             * 电话注册方式
             * @return {[type]} [description]
             */
            telephoneRegister: function() {
                var oHide = document.getElementById('hide');
                var oShow = document.getElementById('show');

                oHide.style.display = 'none';
                oShow.style.display = 'block';
            },

            /**
             * 邮箱注册方式
             * @return {[type]} [description]
             */
            emailRegister: function() {
                var oHide = document.getElementById('hide');
                var oShow = document.getElementById('show');

                oHide.style.display = 'block';
                oShow.style.display = 'none';
            },

            /**
             * 记住密码
             * @return {[type]} [description]
             */
            rememberLoginStatus: function() {
                //TODO:保存用户的信息
            },

            /**
             * 获取验证码
             * @return {[type]} [description]
             */
            getVerificationCode: function() {

            },

            login: function() {
                //TODO:
            } 
        } 
    }
</script>

<style> /* scoped */
    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
    #cover {
        height: 800px;
        background: #333;
        filter:alpha(opacity=80);
        opacity: 0.8;
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
    .header {
        padding: 15px;
        border-bottom: 1px solid #e5e5e5;
        min-height: 25px;;
        background: #f3f3f3;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .title {
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
        background: url(close.png); 
    }
    form {
        margin: 30px auto;
        padding: 10px 0 0;
        width: 306px;
        height: 400px;
        float: left;
        margin-left: 90px;
    }
    legend {
        color: #777;
        font-size: 18px;
    }
    p {
        margin: 14px 0;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin: 8px 0;
        font-weight: bold;
        text-align: left;
    }
    span {
        display: block;
        font-size: 12px;
        color: #F00;
        height: 14px;
    }
    input[type="text"],
    input[type="password"],
    input[type="email"] {
        display: block;
        width: 280px;
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
    #hide {
        display: none;
    }
    #verificationCode {
        float: left;    
        display: inline-block;
        width: 180px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .sendVerificationCode {
        float: left;
        width: 100px;
        height: 34px;
        border: 1px solid #ccc;
        border-left: 0;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background: #fff;
    }
    a {
        float: right;
        margin: 8px 0;
        text-decoration: none;
        color: #009a61;
    }
    a:hover {
        color: #006741;
    }
    .btn {
        display: inline-block;
        float: right;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 20px;
        font-size: 14px;
        line-height: 1.42858;
        border-radius: 4px;
        color: #fff;
        background: #009a61;
        border-color: #008151;
        user-select: none;  
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

</style>