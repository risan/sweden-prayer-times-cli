/* global test:false, expect:false */
const execa = require("execa");

test("it can get prayer times", async () => {
  const { stdout } = await execa("./src/index.js", ["Stockholm"]);

  expect(stdout).toMatch(/stockholm/i);
  expect(stdout).toMatch(/fajr[\s\S]+\d{2}:\d{2}/gim);
  expect(stdout).toMatch(/sunrise[\s\S]+\d{2}:\d{2}/gim);
  expect(stdout).toMatch(/dhuhr[\s\S]+\d{2}:\d{2}/gim);
  expect(stdout).toMatch(/asr[\s\S]+\d{2}:\d{2}/gim);
  expect(stdout).toMatch(/maghrib[\s\S]+\d{2}:\d{2}/gim);
  expect(stdout).toMatch(/isha[\s\S]+\d{2}:\d{2}/gim);
});
