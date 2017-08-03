<template>
  <div class="login">
    <form action="#" class="form">
      <fieldset class="fieldset">
        <legend class="legend">账号登录</legend>
        <p>
          <label>手机或Email</label>
          <input v-model="vname" type="text" placeholder="11位手机号或Email">
        </p>
        <p>
              <label>密　码</label>
              <input v-model="vpsd" type="password" placeholder="密码">
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
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        vname: '',
        vpsd: '',
        hint: '未登录'
      }
    },
    methods: {
      vaildate: function () {
        var data = 'name=' + this.vname + '&psd=' + this.vpsd
        var xmlhttp = new XMLHttpRequest()
        if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest()
        } else {
         // xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById('my').innerHTML = xmlhttp.responseText
          }
        }
        xmlhttp.open('POST', 'http://localhost:3000/get', true)
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlhttp.send(data)
      }
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
</style>
