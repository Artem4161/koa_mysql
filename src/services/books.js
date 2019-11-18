class BookService {
  async list(ctx) {
    const {
      page = 1,
      count = 20,
      filter,
      sort,
    } = ctx.request.body;
    let sql = 'SELECT * FROM books';

    if (filter) {
      sql += ` WHERE ${filter.field} REGEXP "${filter.value}"`;
    }
    if (sort) {
      sql += ` ORDER BY ${sort.field} ${sort.value}`;
    }
    if (page && count) {
      sql += ` LIMIT ${page > 0 ? ((page - 1) * count) : 0}, ${count}`;
    }

    const cache = await redis.get(sql);
    if (cache) {
      Logger.redis('Get value by key:', sql);
      return JSON.parse(cache);
    }

    Logger.mysql('Get list book by sql:', sql);
    const result = await db.query(sql);
    Logger.redis('Set value by key:', sql);
    redis.setex(sql, 3600, JSON.stringify(result));

    return result;
  }

  async add(ctx) {
    const book = ctx.request.body;
    const sql = 'INSERT INTO books SET ?';

    Logger.mysql('Add book by sql:', sql);
    const result = await db.query(sql, book);
    Logger.redis('Flush all cache!');
    redis.flushall();

    return result;
  }

  async update(ctx) {
    const { id } = ctx.params;
    const newBook = ctx.request.body;
    const sql = `UPDATE books SET ? WHERE id = ${id}`;

    Logger.mysql('Update book by sql:', sql);
    const result = await db.query(sql, newBook);
    Logger.redis('Flush all cache!');
    redis.flushall();

    return result;
  }

  async delete(ctx) {
    const { id } = ctx.params;
    const sql = `DELETE FROM books WHERE id = ${id}`;

    Logger.mysql('Delete book by sql:', sql);
    const result = await db.query(sql);
    Logger.redis('Flush all cache!');
    redis.flushall();

    return result;
  }
}

module.exports = new BookService();
