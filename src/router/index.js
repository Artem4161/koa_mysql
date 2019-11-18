const Router = require('koa-router');
const Books = require('../modules/books/route');

const router = new Router();

router.use('/books', Books.routes());

module.exports = router;
