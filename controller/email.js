var nodemailer = require('nodemailer');
var send = function(user){
  var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {

      user: '962176534@qq.com',
      pass: 'huqtwaczklhbbeci' //授权码,通过QQ获取

    }
  });
  var mailOptions = {
    from: '962176534@qq.com', // 发送者
    to: user.email, // 接受者,可以同时发送多个,以逗号隔开
    subject: 'MiniSNS注册确认', // 标题
    //text: 'Hello world', // 文本
    html: `<h2>MiniSNS账号注册确认:</h2> 
    <p >亲爱的用户：</p>  
    <p>您于近期注册了MiniSNS帐号${user.email}, 请<a href='http://localhost:3000/temail?name=${user.name}&psd=${user.psd}'>点击验证</a>完成注册。</p>`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
      return;
    }

    console.log('发送成功');
  });

}
module.exports = {
    emailToken: send
}
