import store from './store.js'
export default{
  test ({commit}) {
    var info = {}
    var xmlHttp = new XMLHttpRequest()
    var token = 'token=' + (localStorage.getItem('token') || sessionStorage.getItem('token') || '')
    if (!window.XMLHttpRequest) {
      // xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        info = JSON.parse(xmlHttp.responseText)
        store.state.mystatus = info
        commit('id', info)
        commit('following', info)
        commit('follower', info)
        commit('anum', info)
        commit('seen')
        commit('login')
      }
    }
    xmlHttp.open('POST', 'http://localhost:3000/token', 'ture')
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlHttp.send(token)
    return info
  },
  vaildate ({commit}) {
    var data = 'name=' + store.state.vname + '&psd=' + store.state.vpsd
    var xmlhttp = new XMLHttpRequest()
    var jsonwt = 'hello world'
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else {
      // xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        window.location.href = '/'
        commit('seen')
        jsonwt = xmlhttp.responseText
        if (store.state.remember === 'ture') {
          localStorage.token = jsonwt
        } else {
          sessionStorage.token = jsonwt
        }
      }
    }
    xmlhttp.open('POST', 'http://localhost:3000/get', true)
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlhttp.send(data)
  },
  email ({commit}) {
    var data = 'email=' + store.state.email +
      '&psd=' + store.state.psd +
      '&name=' + store.state.email
    var xmlhttp = new XMLHttpRequest()
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else {
      // xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        if (xmlhttp.responseText) {
          alert(' 验证成功')
        }
      }
    }
    xmlhttp.open('POST', 'http://localhost:3000/emails', true)
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlhttp.send(data)
    alert(data.email)
  }
}
