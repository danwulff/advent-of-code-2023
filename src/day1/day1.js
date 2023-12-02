function day1(input) {
  const lines = input.trim().split('\n');

  const result = {
    partOne: 0,
    partTwo: 0,
  }

  lines.forEach(line => {
    result.partOne += calibrationLineValuePartOne(line);
    result.partTwo += calibrationLineValuePartTwo(line);
  });

  return result;
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

// Note: it's possible to do this in one regex with lookahead/lookbehind, would rewrite
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
