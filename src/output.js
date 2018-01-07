import SwedenPrayerTimes from 'sweden-prayer-times';
import { success as successSymbol } from 'log-symbols';
import redent from 'redent';
import {
  addHours,
  isAfter,
  isBefore,
  isEqual,
  startOfToday,
  addMinutes
} from 'date-fns';
import spinner from './spinner';
import { successBold, warning } from './echo';

const parseTimeStr = time => {
  const parts = time.split(':').map(d => parseInt(d, 10));

  return addMinutes(addHours(startOfToday(), parts[0]), parts[1]);
};

const formatSchedule = (name, time, next = null) => {
  const now = new Date();
  const schedule = parseTimeStr(time);
  const active = `${successBold(name)} ${successBold(time)} ${successSymbol}`;

  // Schedule equals current time: active
  if (isEqual(schedule, now)) {
    return active;
  }

  // No next schedule
  if (next === null) {
    // Schedule has started: active : upcoming
    return isBefore(schedule, now)
      ? active
      : `${warning(name)} ${warning(time)}`;
  }

  const nextSchedule = parseTimeStr(next);

  // Schedule has passed.
  if (isBefore(schedule, now)) {
    // Next schedule hasn't started: active
    return isAfter(nextSchedule, now) ? active : `${name} ${time}`;
  }

  // Schedule hasn't started: upcoming
  return `${warning(name)} ${warning(time)}`;
};

const output = city =>
  new Promise((resolve, reject) => {
    const swedenPrayerTimes = new SwedenPrayerTimes();

    spinner.start(city);

    swedenPrayerTimes
      .get({ city })
      .then(({ schedule }) => {
        spinner.stopSuccess();

        const out = `
          ${formatSchedule('Fajr', schedule.fajr, schedule.sunrise)}
          ${formatSchedule('Sunrise', schedule.sunrise, schedule.dhuhr)}
          ${formatSchedule('Duhr', schedule.dhuhr, schedule.asr)}
          ${formatSchedule('Asr', schedule.asr, schedule.maghrib)}
          ${formatSchedule('Maghrib', schedule.maghrib, schedule.isha)}
          ${formatSchedule('Isha', schedule.isha)}
        `;

        resolve(redent(out, 2));
      })
      .catch(err => {
        spinner.stopError();
        reject(err);
      });
  });

export default output;
