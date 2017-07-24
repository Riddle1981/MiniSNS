<template>
    <div class="forget-pass">
        <div class="forget-logo">
          <img src="" alt="logo">
        </div>
        <form action="#" class="form">
            <fieldset>
                <legend>找回密码</legend>
                <p>
                    <label>找回方式</label>
                    <input v-on:click="findByTelephone" type="radio" name="findMethod" checked="true">用手机找回
                    <input v-on:click="findByEmail" type="radio" name="findMethod" id="">用email找回
                </p>
                <p v-show="telInfo">
                    <label>手机号码</label>
                    <input class="input-text" type="text">
                </p>

                <p v-show="telInfo">
                    <label>短信验证码</label>
                    <input class="verificationCode" type="text">
                    <button class="sendVerificationCode">获取验证码</button>
                </p>

                <p v-show="emailInfo">
                    <label>Email</label>
                    <input class="input-text" type="email">
                </p>

                <p v-show="emailInfo">
                    <label>验证码</label>
                    <input class="input-text" type="text">
                </p>

                <p v-show="emailInfo">
                    <img src="" alt="验证码">
                </p>

                <input class="btn" type="submit" value="提交">
            </fieldset>
        </form>
        <div class="link">
            <router-link to="register">
                <span>用户登录</span>
            </router-link>
            <router-link to="/">
                <span>返回首页</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
      name: 'forget',
      data () {
        return {
          telInfo: true,
          emailInfo: false
        }
      },
      methods: {
        findByTelephone: function () {
          this.telInfo = true
          this.emailInfo = false
        },

        findByEmail: function () {
          this.telInfo = false
          this.emailInfo = true
        }
      }
    }
</script>

<style scoped>
	.forget-pass {
		height: 645px;
		text-align: center;
		background: #e8e8e8;
	}
	.forget-logo {
    margin: 20px auto;
		height: 100px;
	}
	.form {
		display: inline-block;
		text-align: center;
		font-size: 14px;
		background: #fff;
	}
	.fieldset {
	    margin: 30px 50px;
	    border: none;
	  }
	.legend {
		display: block;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
		margin: 20px auto;
    font-size:18px;
	}
  p {
    margin: 12px 0;
  }
	label {
		display: block;
		margin: 5px 0;
		font-weight: bold;
		text-align: left;
	}
	.input-text,
	.verificationCode {
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
	.input-text {
		width: 450px;
	}
  input[type="radio"] {
    margin: 10px 0px 10px 10px;
  }
  .verificationCode {
    width: 350px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
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
	.sendVerificationCode {
<<<<<<< HEAD
		width: 90px;
		height: 35px;
		text-align: center;
		background: #fff;
		border: 1px solid #ccc;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		cursor: pointer;
	}
	.btn {
		width: 480px;
		margin: 10px 0;
    text-align: center;
    cursor: pointer;
    border: 1px solid #008151;
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
  #find-by-email {
  	display: none;
	}
	.link {
		margin: 10px 0;
		text-align: center;
	}
	span {
		margin: 0px 10px;
		cursor: pointer;
		color: #000;
  }
</style>
