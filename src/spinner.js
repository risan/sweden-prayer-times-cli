import ora from 'ora';
import { error as errorSymbol, success as successSymbol } from 'log-symbols';
import { infoBold } from './echo';

const spinner = ora();

const start = city =>
  spinner.start(`Retrieving prayer times for ${infoBold(city)}`);

const stopSuccess = () => spinner.stopAndPersist({ symbol: successSymbol });

const stopError = () => spinner.stopAndPersist({ symbol: errorSymbol });

export default {
  start,
  stopSuccess,
  stopError
};
