<template>
	<form>
		<p>
			<label>用户名</label>
			<input v-model="userName" v-on:blur="nameVerification" type="text" placeholder="请输入用户名">	
			<span>{{ nameTip }}</span>
		</p>
		
		<p>
			<label>密　码</label>
			<input v-model="pass" v-on:blur="passVerification" type="password" placeholder="请输入密码">
			<span>{{ passTip }}</span>
		</p>		

		<p>
			<label>确认密码</label>
			<input v-mode="confirmPass" v-on:blur="confirmPassVerification" type="password" placeholder="请再次输入密码">
			<span>{{ confirmPassTip }}</span>
		</p>

		<p>
			<label>邮　箱</label>
			<input v-model="email" v-on:blur="emailVerification" type="email" placeholder="请输入邮箱">
			<span>{{ emailTip }}</span>
		</p>

		<p>
			<label>验证码</label>
			<input id="verificationCode" type="text" placeholder="">
			<button v-on:click="sendVerificationCode">{{ verificationCode }}</button>
		</p>
		<input v-on:click="register" type="submit" value="注册">
	</form>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				nameTip: '',
				pass: '',
				passTip: '',
				confirmPass: '',
				confirmPassTip: '',
				email: '',
				emailTip: '',
				verificationCode: '发送验证码'
			}
		},

		methods: {
			/**
			 * 用户名验证
			 * @return {[type]} [description]
			 */
			nameVerification: function() {
				var reg = /^[a-zA-z]\w{3,15}$/;

				if (!reg.test(this.userName)) {
					this.nameTip = '字母、数字、下划线组成，字母开头'
				} else {
					this.nameTip = '';
				}
			},

			/**
			 * 密码验证
			 * @return {[type]} [description]
			 */
			passVerification: function() {
				if (this.pass.length < 4) {
					this.passTip = '密码不能少于4位';
				} else {
					this.passTip = '';
				}
			},

			/**
			 * 确认密码
			 * @return {[type]} [description]
			 */
			confirmPassVerification: function() {
				console.log(this.pass+","+this.confirmPass);  //this.confirmPass没显示
				if (this.pass != this.confirmPass) {
					this.confirmPassTip = '密码不一致';
				} else {
					this.confirmPassTip = '';
				}
			},

			/**
			 * 邮箱验证
			 * @return {[type]} [description]
			 */
			emailVerification: function() {
				var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

				if (!reg.test(this.email)) {
					this.emailTip = '格式错误';
				} else {
					this.emailTip = '';
				}
			},

			/**
			 * 发送验证码
			 * @return {[type]} [description]
			 */
			sendVerificationCode: function() {
				this.verificationCode = '已发送';
				alert("已发送至你的邮箱，请查收");
			},

			/**
			 * 注册
			 * @return {[type]} [description]
			 */
			register: function() {
				
			}
		} 
	}
</script>

<style scoped>
	form {
		width: 600px;
		margin: 30px auto;
		text-align: center;
	}
	p {
		margin: 14px 0;
	}
	label {
		display: inline-block;
		width: 80px;
		text-align: center;
	}
	input[type="text"],
	input[type="password"],
	input[type="email"] {
		width: 210px;
		height: 14px;
		padding: 4px;
	}
	span {
		display: block;
		width: 240px;
		margin-left: 230px;
		height: 16px;
		line-height: 24px;
		text-align: left;
		color: #F00;
		font-size: 12px;
	}
	#verificationCode {
		width: 125px;
	}
	button {
		color: #FFF;
		background: #006633;
	}
	input[type="submit"] {
		padding: 4px 100px;
		margin: 20px 0;
		color: #FFF;
		background: #006633;
	}
</style>