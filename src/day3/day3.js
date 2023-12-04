const digitsExp = /(?<partnum>\d+)+|(?<symbol>[^\d\.])/g;

function day3(input) {
  const rows = input.trim().split('\n').map(row => parseRow(row));
  const partNums = findPartNums(rows);

  return {
    partOne: partNums.reduce((accum, partNum) => accum += partNum, 0),
    partTwo: null,
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

module.exports = {
  day3,
  parseRow,
  findPartNums
};
