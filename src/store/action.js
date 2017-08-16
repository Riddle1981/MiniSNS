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
        commit('test', info.iss)
        commit('seen')
      }
    }
    xmlHttp.open('POST', 'http://localhost:3000/token', 'ture')
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlHttp.send(token)
    return info
  }
}
