<template>
  <div class="login">
    <form action="#" class="form">
      <fieldset class="fieldset">
        <legend class="legend">账号登录</legend>
        <p>
          <label>手机或Email</label>
          <input type="text" placeholder="11位手机号或Email">
        </p>
        <p>
              <label>密　码</label>
              <input type="password" placeholder="密码">
        </p>
        <p>
          <input type="checkbox" name="" id="zddl">自动登录
          <router-link to="forget" class="pdForget themeColor">忘记密码？</router-link>
        </p>
        <input class="btn themeBgColor" type="submit" value="登录">
      </fieldset>
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
  #zddl{
    margin-left: 0px;
  }
  .login {
    margin-left: 70px;
    margin-top: 30px;
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
  .btn {
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
  }
  .btn:hover {
    padding: 6px 98px;
    background: #0073ce;
    border-color: #0F88E8;
  }
  .btn:active {
    outline: 0;
  }
</style>
