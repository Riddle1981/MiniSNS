const Koa = require ('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
var cors = require('koa2-cors');
const user = require('./controller/userdb.js');
const userinfo = require('./controller/userinfo.js');
const jwt = require('./controller/jwt.js');
const temail = require('./controller/email.js');
const artical = require('./controller/artical.js');

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


router.post('/get', async (ctx, next) => {

    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.psd || '';
        userdata = await user.get(name);
    if(userdata[0]) {
        var uname = userdata[0].name;
        var upsd = userdata[0].psd;
        console.log(`signin with database: ${uname}, password: ${upsd}`);
        if (name === uname && password === upsd) {
            var info = jwt.create(uname);
            ctx.response.body = info;
            ctx.response.set("Access-Control-Allow-Origin", '*');
        } else {
            ctx.response.body = '用户名或密码错误';
        }
    }else {
        ctx.response.body = '无效用户名';
    }
});


router.post('/emails', async(ctx,next) => {
    var email = ctx.request.body.email,
        user = ctx.request.body;
    temail.emailToken(user);
    console.log(`signin with database: ${email}`);
    if (email) {
        var info = true;
        ctx.response.body = info;
        ctx.response.set("Access-Control-Allow-Origin", '*');
        console.log(info);
    } else {
        ctx.response.body = '用户名或密码错误';
    }

});

router.get('/temail',async(ctx,next) => {
    var name = ctx.query.name,
        psd = ctx.query.psd;
    console.log(name+''+psd)
    console.log(ctx.request.body)
    await user.post(name,psd);
    await userinfo.post(name);
    ctx .response.body = `<h2>注册成功 点击<a href='http://localhost:8080'>立即跳转</a></h2>`

})

router.post('/token', async(ctx,next) => {
  var token = ctx.request.body.token || ''
  console.log(token)
  console.log(typeof token)
  var tk = jwt.test(token)||''
  var user = await userinfo.get(tk.iss)
  var info = {
    id: tk.iss,
    birth: user[0].birth,
    follower: user[0].follower,
    following: user[0].following,
    industry: user[0].industry,
    domicile: user[0].domicile,
    sex: user[0].sex,
    anum: user[0].anum,
    autograph: user[0].autograph
  }
  ctx.response.body = info
  ctx.response.set("Access-Control-Allow-Origin", '*');
  console.log(info)
})

app.listen(3000);
console.log("app started at port 3000");
