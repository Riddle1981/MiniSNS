const Koa = require ('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const cors = require('koa-cors');
const app = new Koa();


const user = require('./controller/userdb.js');



app.use(bodyParser());
app.use(cors());

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
            ctx.response.body = 'success!';
        } else {
            ctx.response.body = '用户名或密码错误';
        }
    }else {
        ctx.response.body = '无效用户名';
    }
});

app.use(router.routes());

app.listen(3000);
console.log("app started at port 3000");
