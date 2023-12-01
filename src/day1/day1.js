function day1(input) {
  const lines = input.trim().split('\n');

  const sumPartOne = lines.reduce((accum, current) => {
    return accum + calibrationLineValuePartOne(current);
  }, 0);

  const sumPartTwo = lines.reduce((accum, current) => {
    return accum + calibrationLineValuePartTwo(current);
  }, 0);

  return {
    partOne: sumPartOne,
    partTwo: sumPartTwo,
  };
}

function calibrationLineValuePartOne(input) {
  const charArray = Array.from(input);
  const first = charArray.find(findDigit);
  const last = charArray.findLast(findDigit);
  return Number(first + last);
}

function findDigit(c) {
  return !isNaN(c);
}

const findStringDigitExp = /(\d|one|two|three|four|five|six|seven|eight|nine)/;
const findReversedStringDigitExp = /(\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/;

function calibrationLineValuePartTwo(input) {
  const reversedInput = input.split('').reverse().join('');
  const first = convertToStringDigit(findStringDigitExp.exec(input)[1]);
  const last = convertToStringDigit(findReversedStringDigitExp.exec(reversedInput)[1]);
  return Number(first + last);
}

function convertToStringDigit(string) {
  let number = Number(string);
  if (isNaN(number)) {
    switch (string) {
      case 'one':
      case 'eno':
        number = '1';
        break;
      case 'two':
      case 'owt':
        number = '2';
        break;
      case 'three':
      case 'eerht':
        number = '3';
        break;
      case 'four':
      case 'ruof':
        number = '4';
        break;
      case 'five':
      case 'evif':
        number = '5';
        break;
      case 'six':
      case 'xis':
        number = '6';
        break;
      case 'seven':
      case 'neves':
        number = '7';
        break;
      case 'eight':
      case 'thgie':
        number = '8';
        break;
      case 'nine':
      case 'enin':
        number = '9';
        break;
    }
    return number;
  } else {
    return string;
  }
}

module.exports = {
  day1,
  calibrationLineValuePartOne,
  calibrationLineValuePartTwo,
};
