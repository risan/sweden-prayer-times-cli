import chalk from 'chalk';

export const danger = message => chalk.red(message);

export const infoBold = message => chalk.bold.magenta(message);

export const successBold = message => chalk.bold.green(message);

export const warning = message => chalk.yellow(message);

export default {
  danger,
  infoBold,
  successBold,
  warning
};
