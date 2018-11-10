/* global jest:false, test:false, expect:false */
const meow = require("meow");
const input = require("../src/input");

jest.mock("meow", () => jest.fn());

test("it can get city and date arguments", () => {
  meow.mockReturnValue({ input: ["Stockholm", "2018-08-17"] });

  const { city, date } = input();

  expect(city).toBe("Stockholm");
  expect(date).toBe("2018-08-17");
});

test("the date argument may empty", () => {
  meow.mockReturnValue({ input: ["Stockholm"] });

  const { city, date } = input();

  expect(city).toBe("Stockholm");
  expect(date).toBeUndefined();
});

test("it throws an error if city argument is missing", () => {
  meow.mockReturnValue({ input: [] });

  expect(input).toThrow(/city[\s\S]+missing/i);
});
