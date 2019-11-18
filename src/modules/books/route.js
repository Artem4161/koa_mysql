const Router = require('koa-router');
const BookController = require('./controller');
const validateSchema = require('../../middlewares/validate');
const {
  addBook,
  getListBook,
  updateBook,
} = require('./schemas');

const router = new Router();

/**
 * @swagger
 * /books:
 *   post:
 *     tags:
 *       - Books
 *     description: Get list book
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: false
 *         schema:
 *           type: "object"
 *           properties:
 *             page:
 *               type: number
 *             count:
 *               type: number
 *             filter:
 *               type: object
 *               properties:
 *                  field:
 *                    type: string
 *                    enum: title, author, description
 *                  value:
 *                    type: string
 *             sort:
 *               type: object
 *               properties:
 *                  field:
 *                    type: string
 *                    enum: id, date
 *                  value:
 *                    type: string
 *                    enum: ASC, DESC
 *     responses:
 *       200:
 *         description: "successful"
 *       422:
 *         description: "error"
 */
router.post(
  '/',
  validateSchema(getListBook),
  BookController.list,
);

/**
 * @swagger
 * /books/add:
 *   post:
 *     tags:
 *       - Books
 *     description: Add book
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: "object"
 *           properties:
 *             title:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *             date:
 *               type: string
 *             author:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *             description:
 *               type: string
 *               minLength: 2
 *             image:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *     responses:
 *       200:
 *         description: "successful"
 *       422:
 *         description: "error"
 */
router.post(
  '/add',
  validateSchema(addBook),
  BookController.add,
);

/**
 * @swagger
 * /update/:id:
 *   patch:
 *     tags:
 *       - Books
 *     description: Update book
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: "object"
 *           properties:
 *             title:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *             date:
 *               type: string
 *             author:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *             description:
 *               type: string
 *               minLength: 2
 *             image:
 *               type: string
 *               minLength: 2
 *               maxLength: 255
 *     responses:
 *       200:
 *         description: "successful"
 *       422:
 *         description: "error"
 */
router.patch(
  '/update/:id',
  validateSchema(updateBook),
  BookController.update,
);

/**
 * @swagger
 * /delete/:id:
 *   delete:
 *     tags:
 *       - Books
 *     description: Update book
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: query
 *     responses:
 *       200:
 *         description: "successful"
 *       422:
 *         description: "error"
 */
router.delete(
  '/delete/:id',
  BookController.delete,
);


module.exports = router;
