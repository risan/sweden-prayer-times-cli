#!/usr/bin/env node
/* eslint no-console: "off" */
const { red } = require("chalk");
const ora = require("ora");
const swedenPrayerTimes = require("sweden-prayer-times");

const input = require("./input");
const output = require("./output");

(async () => {
  const spinner = ora({ spinner: "clock" });

  try {
    const { city, date } = input();

    spinner.start(`Retrieving prayer times in ${city}...`);

    const prayerTimes = await swedenPrayerTimes(city, date);

    spinner.stop();

    console.log(output(prayerTimes));
  } catch (error) {
    spinner.fail(red(error.message));
    process.exit(1);
  }
})();
