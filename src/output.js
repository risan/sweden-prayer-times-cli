const { bold, green } = require("chalk");
const redent = require("redent");

/**
 * Format the prayer times output.
 *
 * @param {String} options.city
 * @param {String} options.date
 * @param {Object} options.schedule
 * @return {String}
 */
const output = ({ city, date, schedule }) => {
  const title = `☪️  ${city} Prayer Times`;

  return redent(
    `
    ${bold.magenta(title.toUpperCase())}
    📆 ${bold.yellow(`Date: ${date}`)}

      ${bold("Fajr")}    : ${green(schedule.fajr)}
      ${bold("Sunrise")} : ${green(schedule.sunrise)}
      ${bold("Dhuhr")}   : ${green(schedule.dhuhr)}
      ${bold("Asr")}     : ${green(schedule.asr)}
      ${bold("Maghrib")} : ${green(schedule.maghrib)}
      ${bold("Isha")}    : ${green(schedule.isha)}
  `,
    2
  );
};

module.exports = output;
