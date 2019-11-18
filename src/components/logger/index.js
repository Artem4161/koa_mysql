/* eslint-disable no-console */
const chalk = require('chalk');

class LoggerComponent {
  constructor() {
    this.LOG_TYPES = {
      INFO: 1,
      ERROR: 2,
      SERVER: 3,
      MYSQL: 4,
      REDIS: 5,
    };
    this.ACTIVE_LOGGER_TYPES = [
      this.LOG_TYPES.INFO,
      this.LOG_TYPES.ERROR,
      this.LOG_TYPES.SERVER,
      this.LOG_TYPES.MYSQL,
      this.LOG_TYPES.REDIS,
    ];
  }

  logTime() {
    const nowDate = new Date();
    return `${nowDate.toLocaleDateString()} ${nowDate.toLocaleTimeString([], {
      hour12: false,
    })}:${nowDate.getMilliseconds()}`;
  }

  info(...args) {
    if (this.ACTIVE_LOGGER_TYPES.includes(this.LOG_TYPES.INFO)) {
      console.log(
        `${this.logTime()} ${process.pid} ${chalk.bold.green('[INFO]')}`,
        ...args,
      );
    }
  }

  error(...args) {
    if (this.ACTIVE_LOGGER_TYPES.includes(this.LOG_TYPES.ERROR)) {
      console.log(
        `${this.logTime()} ${process.pid} ${chalk.bold.red('[ERROR]')}`,
        ...args,
      );
    }
  }

  server(...args) {
    if (this.ACTIVE_LOGGER_TYPES.includes(this.LOG_TYPES.SERVER)) {
      console.log(
        `${this.logTime()} ${process.pid} ${chalk.bold.blue('[SERVER]')}`,
        ...args,
      );
    }
  }

  mysql(...args) {
    if (this.ACTIVE_LOGGER_TYPES.includes(this.LOG_TYPES.MYSQL)) {
      console.log(
        `${this.logTime()} ${process.pid} ${chalk.bold.yellow('[MYSQL]')}`,
        ...args,
      );
    }
  }

  redis(...args) {
    if (this.ACTIVE_LOGGER_TYPES.includes(this.LOG_TYPES.REDIS)) {
      console.log(
        `${this.logTime()} ${process.pid} ${chalk.bold.cyan('[REDIS]')}`,
        ...args,
      );
    }
  }
}

module.exports = new LoggerComponent();
