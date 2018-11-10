const { bold, yellow: arg } = require("chalk");
const meow = require("meow");

const command = bold.blue("sweden-prayer-times");

/**
 * Get cli input.
 *
 * @return {Object}
 */
const input = () => {
  const cli = meow(`
    ${bold("Usage")}
      $ ${command} ${arg("<city> [date]")}

    ${bold("Arguments")}
      - ${arg("city")}: The name of the city.
      - ${arg(
        "date"
      )} (optional): The date to retrieve, default to today's date.

    ${bold("Examples")}
      $ ${command} Stockholm
      $ ${command} Uppsala 2018-08-17
  `);

  if (cli.input.length === 0) {
    throw new Error("The city argument is missing.");
  }

  const [city, date] = cli.input;

  return { city, date };
};

module.exports = input;
