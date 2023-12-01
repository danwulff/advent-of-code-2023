const { day1, calibrationLineValuePartOne, calibrationLineValuePartTwo } = require("./day1");

let inputPartOne = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

let inputPartTwo = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

test("calibrationLineValuePartOne", () => {
  expect(calibrationLineValuePartOne('1abc2')).toBe(12);
  expect(calibrationLineValuePartOne('pqr3stu8vwx')).toBe(38);
  expect(calibrationLineValuePartOne('a1b2c3d4e5f')).toBe(15);
  expect(calibrationLineValuePartOne('treb7uchet')).toBe(77);
});

test("calibrationLineValuePartTwo", () => {
  expect(calibrationLineValuePartTwo('two1nine')).toBe(29);
  expect(calibrationLineValuePartTwo('eightwothree')).toBe(83);
  expect(calibrationLineValuePartTwo('abcone2threexyz')).toBe(13);
  expect(calibrationLineValuePartTwo('xtwone3four')).toBe(24);
  expect(calibrationLineValuePartTwo('4nineeightseven2')).toBe(42);
  expect(calibrationLineValuePartTwo('zoneight234')).toBe(14);
  expect(calibrationLineValuePartTwo('7pqrstsixteen')).toBe(76);
});

test("day1", () => {
  const { partOne } = day1(inputPartOne);
  const { partTwo } = day1(inputPartTwo);
  expect(partOne).toBe(142);
  expect(partTwo).toBe(281);
});
