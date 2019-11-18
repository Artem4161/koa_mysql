// eslint-disable-next-line import/no-extraneous-dependencies
const Mock = require('mockjs');

module.exports = () => {
  const books = [];
  const count = 1000;

  for (let i = 0; i < count; i++) {
    books.push(Mock.mock({
      title: '@title(5)',
      date: Mock.Random.date(),
      author: '@first',
      description: '@paragraph(2)',
      image: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    }));
  }
  return books;
};
