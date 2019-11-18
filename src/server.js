const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const staticServer = require('koa-static-server');
const swaggerJSDoc = require('swagger-jsdoc');
const { LoggerComponent } = require('./components');
const { port, host, swagger } = require('./config');
const router = require('./router');
const db = require('./db');
const redis = require('./redis');

const { NODE_ENV, PORT, HOST } = process.env;

global.Logger = LoggerComponent;
global.db = db;
global.redis = redis;

const app = new Koa();
app.use(bodyParser());
if (NODE_ENV === 'development') {
  router.get('/api/api-docs.json', async (ctx, next) => {
    await next();
    ctx.body = swaggerJSDoc(swagger);
  });
  app.use(staticServer({ rootDir: `${__dirname}/static/api-doc`, rootPath: '/api-doc' }));
}
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT || port, HOST || host, () => {
  Logger.server(`Server has been started on ${host}:${port}`);
});
