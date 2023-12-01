const { day1, calibrationLineValue } = require("./day1");

let input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

test("calibrationLineValue", () => {
  expect(calibrationLineValue('1abc2')).toBe(12);
  expect(calibrationLineValue('pqr3stu8vwx')).toBe(38);
  expect(calibrationLineValue('a1b2c3d4e5f')).toBe(15);
  expect(calibrationLineValue('treb7uchet')).toBe(77);
});

test("day1", () => {
  const result = day1(input);
  expect(result.partOne).toBe(142);
  expect(result.partTwo).toBe(null);
});
