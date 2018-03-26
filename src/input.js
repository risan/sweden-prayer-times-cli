const meow = require('meow');

const input = ({ defaultCity = 'Stockholm' } = {}) => {
  const cli = meow(`
		Usage
			$ sweden-prayer-times <city>

		Examples
			$ sweden-prayer-times Stockholm
	`);

  const city = cli.input.length > 0 ? cli.input.join(' ') : defaultCity;

  return { city };
};

module.exports = input;
