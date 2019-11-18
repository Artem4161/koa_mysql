const Redis = require('async-redis');
const { redis: { port } } = require('../config');

const redis = Redis.createClient(port);

redis.on('error', (err) => {
  Logger.redis(`Redis error: ${err}`);
});

module.exports = redis;
