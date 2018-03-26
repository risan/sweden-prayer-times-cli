const chalk = require('chalk');

const danger = message => chalk.red(message);

const infoBold = message => chalk.bold.magenta(message);

const successBold = message => chalk.bold.green(message);

const warning = message => chalk.yellow(message);

module.exports = {
  danger,
  infoBold,
  successBold,
  warning
};
