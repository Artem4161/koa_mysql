/* eslint-disable no-useless-constructor */
const BaseComponent = require('../../components/base');
const BookService = require('../../services/books');

class BookController extends BaseComponent {
  constructor() {
    super();
  }

  async list(ctx) {
    try {
      const content = await BookService.list(ctx);
      return super.sendResponse(ctx, content, 'Book list received successfully!');
    } catch (error) {
      return super.sendError(ctx, 401, error, 'Get book list failed.');
    }
  }

  async add(ctx) {
    try {
      const content = await BookService.add(ctx);
      return super.sendResponse(ctx, content, 'The book added successfully!');
    } catch (error) {
      return super.sendError(ctx, 401, error, 'Add book failed.');
    }
  }

  async update(ctx) {
    try {
      const content = await BookService.update(ctx);
      return super.sendResponse(ctx, content, 'The book updated successfully!');
    } catch (error) {
      return super.sendError(ctx, 401, error, 'Update book failed.');
    }
  }

  async delete(ctx) {
    try {
      const content = await BookService.delete(ctx);
      return super.sendResponse(ctx, content, 'The book deleted successfully!');
    } catch (error) {
      return super.sendError(ctx, 401, error, 'Delete book failed.');
    }
  }
}
module.exports = new BookController();
