const { readFileSync } = require("fs");
const { day1 } = require("./src/day1/day1.js");
const { day2 } = require("./src/day2/day2.js");

const daysToRun = [
  day1,
  day2,
];

daysToRun.forEach((day) => {
  const name = day.name;
  const input = readFileSync(`./inputs/${name}`).toString();
  console.log(`${name}:`, day(input));
});
