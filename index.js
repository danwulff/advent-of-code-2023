const { readFileSync } = require("fs");
const { day1 } = require("./src/day1/day1.js");
const { day2 } = require("./src/day2/day2.js");
const { day3 } = require("./src/day3/day3.js");

const daysToRun = [
  day1,
  day2,
  day3,
];

daysToRun.forEach((day) => {
  const name = day.name;
  const input = readFileSync(`./inputs/${name}`).toString();
  console.log(`${name}:`, day(input));
});
