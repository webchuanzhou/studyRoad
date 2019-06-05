//模块引入
const Koa = require('koa');
//实例化
const app = new Koa();
//端口监听
app.listen(3000);
//中间件
const main = ctx => {
  ctx.response.body = 'Hello World';
  ctx.response.body = 'Hello World2';
};
//实例化中间健
app.use(main);

//猜测   读取文件数据库  es8  ansy wait
const fs = require('fs');
ctx.response.body = fs.createReadStream('./demos/template.html');

//第三方模块 路由
const route = require('koa-route');

//路由重定向
ctx.response.redirect('/');

//中间健走势
const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);
//打印 123321


//中间件合成
const compose = require('koa-compose');
const middlewares = compose([logger, main]);



//封装中间健  第一个走得中间健
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  ctx.app.emit('error', err, ctx);
  }
};

//中间健cookie
const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}

//表单异步获取
const koaBody = require('koa-body');
const main = async function(ctx) {
  const body = ctx.request.body;
  console.log(body)
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};
app.use(koaBody());
app.use(main);


//读取上传文件  还没看懂  先放着  
const os = require('os');
const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const koaBody = require('koa-body');

const app = new Koa();

const main = async function(ctx) {
  const tmpdir = os.tmpdir();
  const filePaths = [];
  const files = ctx.request.body.files || {};

  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);