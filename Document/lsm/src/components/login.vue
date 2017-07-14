<template>
	<form>
		<p>
			<label for="name">用户名</label>
			<input v-model="userName" v-on:blur="userVerification" id="name" type="text" placeholder="请输入用户名">	
			<span>{{ nameTip }}</span>
		</p>
		
		<p>
			<label for="pass">密　码</label>
			<input v-model="pass" v-on:blur="passVerification" id="pass" type="password" placeholder="请输入密码">
			<span>{{ passTip }}</span>
		</p>

		<p>
			<input type="checkbox" name="" id="">自动登录
			<input type="checkbox" name="" id="">记住密码
		</p>

		<input v-on:click="login" type="submit" value="登录">
	</form>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				nameTip: '',
				pass: '',
				passTip: ''
			}
		},

		methods: {
			login: function() {
				

			},

			userVerification: function() {
				if (this.userName.length == 0) {
					this.nameTip = '用户名不能为空';
				} else {
					this.nameTip = '';
				}
			},

			passVerification: function() {
				if (this.pass.length == 0) {
					this.passTip = '密码不能为空';
				} else {
					this.passTip = '';
				}
			}
		} 
	}
</script>

<style scoped>
	form {
		width: 500px;
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
	input[type="password"] {
		width: 210px;
		height: 14px;
		padding: 4px;
	}
	input[type="checkbox"] {
		margin: 0 8px;
	}
	span {
		display: block;
		width: 140px;
		margin-left: 180px;
		text-align: left; 
		height: 16px;
		line-height: 24px;
		color: #F00;
		font-size: 12px;
	}
	input[type="submit"] {
		padding: 4px 100px;
		margin: 20px 0;
		color: #FFF;
		background: #006633;
	}
</style>