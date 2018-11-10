/* global test:false, expect:false */
const output = require("../src/output");

test("it can format prayer times object", () => {
  const str = output({
    city: "Stockholm",
    date: "2018-01-30",
    schedule: {
      fajr: "01:00",
      sunrise: "02:00",
      dhuhr: "03:00",
      asr: "04:00",
      maghrib: "05:00",
      isha: "06:00"
    }
  });

  expect(str).toMatch(/stockholm/i);
  expect(str).toMatch(/fajr[\s\S]+01:00/gim);
  expect(str).toMatch(/sunrise[\s\S]+02:00/gim);
  expect(str).toMatch(/dhuhr[\s\S]+03:00/gim);
  expect(str).toMatch(/asr[\s\S]+04:00/gim);
  expect(str).toMatch(/maghrib[\s\S]+05:00/gim);
  expect(str).toMatch(/isha[\s\S]+06:00/gim);
});
