<template>
	<div class="forget-pass">
		<div class="logo">
			<img src="" alt="logo">
		</div>

		<form action="#">
			<legend>找回密码</legend>

			<p>
				<label>找回方式</label>
				<input v-on:click="findByTelephone" type="radio" name="findMethod" checked="true">用手机找回
				<input v-on:click="findByEmail" type="radio" name="findMethod" id="">用email找回
			</p>

			<p id="find-by-telephone">
				<label>手机号码</label>
				<input class="input-text" type="text">
			</p>

			<p id="find-by-telephone">
				<label>短信验证码</label>
				<input class="verificationCode" type="text">
				<button class="sendVerificationCode">获取验证码</button>
			</p>

			<p id="find-by-email">
				<label>Email</label>
				<input class="input-text" type="email">
			</p>

			<p id="find-by-email">
				<label>验证码</label>
				<input class="input-text" type="text">
			</p>

			<p id="find-by-email">
				<img src="" alt="验证码">
			</p>

			<input class="btn" type="submit" value="提交">
		</form>
		<div>
			<router-link>
				用户登录
			</router-link>
			<router-link>
				返回首页
			</router-link>
		</div>

	</div>
</template>

<!--<script>-->
	<!--export default {-->
		<!--methods: {-->
			<!--findByTelephone: function () {-->
				<!--var oShow = document.getElementById('find-by-telephone');-->
				<!--var oHide = document.getElementById('find-by-email');-->

				<!--oShow.style.display = 'block';-->
				<!--oHide.style.display = 'none';-->
			<!--},-->

			<!--findByEmail: function () {-->
				<!--var oHide = document.getElementById('find-by-telephone');-->
				<!--var oShow = document.getElementById('find-by-email');-->

				<!--oHide.style.display = 'none';-->
				<!--oShow.style.display = 'block';-->
			<!--}-->
		<!--}-->
	<!--}-->
<!--</script>-->

<style scoped>
	.forget-pass {
		height: 645px;
		text-align: center;
		background: #e8e8e8;
	}
	.logo {
		height: 100px;
	}
	form {
		display: inline-block;
		padding: 30px;
		text-align: left;
		font-size: 14px;
		background: #fff;
	}
	legend {
		display: block;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
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
	.verificationCode {
		width: 350px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.sendVerificationCode {
		width: 90px;
		height: 35px;
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
</style>
