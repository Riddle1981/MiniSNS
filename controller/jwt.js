/**
 * Created by hermione on 2017/8/5.
 */
const jwt = require('jwt-simple');
const moment = require('moment');
var secret = 'bhjdnslamslasmdnjkewndlKMXSXDBCXDJSNXLKMASLMDWE'

//加密过程
var getJwt = function(userId)
{
  var expires = moment().add( 7,'days').valueOf();
  var token = jwt.encode({
    iss: userId,
    exp: expires
  }, secret);
  return token;
}

//解密过程
var testJwt = function(token){
  //返回{foo: 'bar'}
  var decoded = jwt.decode(token,secret)
  return decoded;
}

module.exports = {
  create: getJwt,
  test: testJwt
}
