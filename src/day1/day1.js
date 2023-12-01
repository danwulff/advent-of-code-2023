function day1(input) {
  const lines = input.trim().split('\n');
  const sum = lines.reduce((accum, current) => {
    return accum + calibrationLineValue(current);
  }, 0);

  return {
    partOne: sum,
    partTwo: null,
  };
}

function calibrationLineValue(input) {
  const charArray = Array.from(input);
  const first = charArray.find(c => !isNaN(c));
  const last = charArray.findLast(c => !isNaN(c));
  return Number(first + last);
}

module.exports = {
  day1,
  calibrationLineValue,
};
