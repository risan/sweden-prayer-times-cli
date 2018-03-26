const ora = require('ora');
const { error: errorSymbol, success: successSymbol } = require('log-symbols');
const { infoBold } = require('./echo');

const spinner = ora();

const start = city =>
  spinner.start(`Retrieving prayer times for ${infoBold(city)}`);

const stopSuccess = () => spinner.stopAndPersist({ symbol: successSymbol });

const stopError = () => spinner.stopAndPersist({ symbol: errorSymbol });

module.exports = {
  start,
  stopSuccess,
  stopError
};
