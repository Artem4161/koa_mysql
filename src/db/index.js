const mysql = require('mysql');
const util = require('util');
const whiteMockDataBooks = require('../seed');
const {
  mysql: {
    host, user, password, database,
  },
} = require('../config');

const conf = {
  host,
  user,
  password,
  database,
};

function makeDb(config) {
  const db = mysql.createConnection(config);

  return {
    query(sql, args) {
      return util.promisify(db.query)
        .call(db, sql, args);
    },
    close() {
      return util.promisify(db.end).call(db);
    },
  };
}

const db = makeDb(conf);

// Create table if does not exist
db.query('CHECK TABLE books', (err, result) => {
  if (err) throw err;
  if (result[0].Msg_text !== 'OK') {
    const sql = 'CREATE TABLE books(id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255), date DATE, author VARCHAR(255), description TEXT, image VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (error) => {
      if (error) throw error;
    });

    const books = whiteMockDataBooks();

    const sql2 = 'INSERT INTO books SET ?';
    books.forEach((book) => {
      db.query(sql2, book, (error) => {
        if (error) throw error;
      });
    });
    Logger.mysql('Data uploaded!');
  }
});

module.exports = db;
