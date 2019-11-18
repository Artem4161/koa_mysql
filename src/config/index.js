module.exports = {
  port: 3000,
  host: 'localhost',
  mysql: {
    host: 'localhost',
    database: 'db_test',
    user: 'root',
    password: '123456',
  },
  redis: {
    port: 6379,
    cacheExp: 3600,
  },
  swagger: {
    definition: {
      swagger: '2.0',
      info: {
        title: 'Ivanov Artem test task',
        version: '1.0.0',
      },
    },
    apis: ['./src/modules/**/*.js'],
  },
};
