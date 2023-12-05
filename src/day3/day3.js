const digitsExp = /(?<partnum>\d+)+|(?<symbol>[^\d\.])/g;

function day3(input) {
  const rows = input.trim().split('\n').map(row => parseRow(row));
  const partNums = findPartNums(rows);
  const gearRatios = findGearRatios(rows);

  return {
    partOne: partNums.reduce((accum, partNum) => accum += partNum, 0),
    partTwo: gearRatios.reduce((accum, gearRatio) => accum += gearRatio, 0),
  };
}

function parseRow(row) {
  const parsedRow = {
    nums: [],
    symbols: [],
  };
  for (let match of row.matchAll(digitsExp)) {
    if (match.groups.partnum) {
      parsedRow.nums.push({ val: match.groups.partnum, index: match.index });
    } else if (match.groups.symbol) {
      parsedRow.symbols.push({ val: match.groups.symbol, index: match.index });
    }
  }
  return parsedRow;
}

// Note: the logic before here could be consolidated if nums and symbols are treated more similarly

function findPartNums(rows) {
  const partNums = [];
  rows.forEach((row, rowIndex) => {
    row.nums.forEach(num => {
      const beforeIndex = num.index - 1;
      const afterIndex = num.index + num.val.length;
      if (
        // before or after in the same row
        findSymbolBetween(row, beforeIndex, afterIndex) ||
        // above
        rowIndex > 0 && findSymbolBetween(rows[rowIndex - 1], beforeIndex, afterIndex) ||
        // below
        rowIndex < rows.length - 1 && findSymbolBetween(rows[rowIndex + 1], beforeIndex, afterIndex)
      ) {
        partNums.push(Number(num.val));
      }
    });
  });
  return partNums;
}

function findSymbolBetween(row, min, max) {
  return row.symbols.some(symbol => {
    return symbol.index >= min && symbol.index <= max;
  });
}

function findGearRatios(rows) {
  const gearRatios = [];
  rows.forEach((row, rowIndex) => {
    const possibleGears = row.symbols.filter(symbol => symbol.val === '*');
    possibleGears.forEach(gear => {
      const beforeIndex = gear.index - 1;
      const afterIndex = gear.index + 1;
      const numsAroundGear = [];
      // before or after
      numsAroundGear.push(...findNumBetween(row, beforeIndex, afterIndex));
      // above
      if (rowIndex > 0) {
        numsAroundGear.push(...findNumBetween(rows[rowIndex - 1], beforeIndex, afterIndex));
      }
      // below
      if (rowIndex < rows.length - 1) {
        numsAroundGear.push(...findNumBetween(rows[rowIndex + 1], beforeIndex, afterIndex));
      }
      // gear ratio calc
      if (numsAroundGear.length === 2) {
        gearRatios.push(numsAroundGear[0] * numsAroundGear[1]);
      }
    });
  });
  return gearRatios;
}

function findNumBetween(row, min, max) {
  return row.nums.filter(num => {
    return num.index <= max && min < (num.index + num.val.length)
  }).map(num => Number(num.val));
}

module.exports = {
  day3,
  parseRow,
  findPartNums,
  findGearRatios,
};
