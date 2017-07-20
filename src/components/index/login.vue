<template>
    <div class="login">
        <form action="#">
              <legend>账号登录</legend>
              <p>
                    <label>手机或Email</label>
                    <input type="text" placeholder="11位手机号或Email">
              </p>

              <p>
                    <label>密　码</label>
                    <input type="password" placeholder="密码">
              </p>

              <p>
                    <input type="checkbox" name="" id="">自动登录
                    <router-link to="forget">
                        <a href="#">忘记密码？</a>
                    </router-link>
              </p>

              <input class="btn" type="submit" value="登录">
        </form>
    </div>
</template>

<script>
    export default {
      methods: {
      }
    }
</script>

<style scoped>
    .login {
          display: inline-block;
          margin-top: 30px;
          text-align: center;
          border-radius: 6px;
          border: 1px solid #ccc;
    }
	  form {
          display: inline-block;
          margin: 0 30px;
          text-align: center;
    }
    legend {
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
          width: 226px;
          height: 25px;
          padding: 6px 12px;
          font-size: 14px;
          color: #555;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 6px;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
               -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
                  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }
    input[type="checkbox"] {
          margin-top: 10px;
    }
    input:focus {
      border-color: rgba(82, 168, 236, 0.8);
      outline: 0;
      outline: thin dotted \9;
      /* IE6-9 */
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
               box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);    }
    a {
          float: right;
          line-height: 35px;
          color: #006633;
          font-size: 14px;
          text-decoration: none;
    }
    .btn {
          display: inline-block;
          cursor: pointer;
          border: 1px solid #008151;
          padding: 6px 98px;
          margin: 20px 0;
          font-size: 14px;
          border-radius: 4px;
          color: #fff;
          background: #009a61;
    }
    .btn:hover {
          padding: 6px 98px;
          background: #006741;
          border-color: #00432a;
    }
    .btn:active {
          outline: 0;
    }
</style>
