import meow from 'meow';

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

export default input;
