const { day3, parseRow, findPartNums } = require("./day3");

let input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

test("day3", () => {
  const result = day3(input);
  expect(result.partOne).toBe(4361);
  expect(result.partTwo).toBe(null);
});

test("parseRow", () => {
  expect(parseRow(`467..114..`)).toEqual({
    nums: [
      {
        val: '467',
        index: 0,
      }, {
        val: '114',
        index: 5,
      },
    ],
    symbols: []
  });
  expect(parseRow(`...*......`)).toEqual({
    nums: [],
    symbols: [
      {
        val: '*',
        index: 3,
      }
    ],
  });
  expect(parseRow(`..35..633.`)).toEqual({
    nums: [
      {
        val: '35',
        index: 2,
      },
      {
        val: '633',
        index: 6,
      }
    ],
    symbols: [],
  });
  expect(parseRow(`......#...`)).toEqual({
    nums: [],
    symbols: [
      {
        val: '#',
        index: 6,
      }
    ],
  });
  expect(parseRow(`617*......`)).toEqual({
    nums: [
      {
        val: '617',
        index: 0,
      }
    ],
    symbols: [
      {
        val: '*',
        index: 3,
      }
    ],
  });
  expect(parseRow(`.....+.58.`)).toEqual({
    nums: [
      {
        val: '58',
        index: 7,
      }
    ],
    symbols: [
      {
        val: '+',
        index: 5,
      }
    ],
  });
  expect(parseRow(`..592.....`)).toEqual({
    nums: [
      {
        val: '592',
        index: 2,
      }
    ],
    symbols: [],
  });
  expect(parseRow(`......755.`)).toEqual({
    nums: [
      {
        val: '755',
        index: 6,
      }
    ],
    symbols: [],
  });
  expect(parseRow(`...$.*....`)).toEqual({
    nums: [],
    symbols: [
      {
        val: '$',
        index: 3,
      },
      {
        val: '*',
        index: 5,
      }
    ]
  });
  expect(parseRow(`.664.598..`)).toEqual({
    nums: [
      {
        val: '664',
        index: 1,
      },
      {
        val: '598',
        index: 5,
      }
    ],
    symbols: [],
  });
});

test("findPartNums", () => {
  const rows = [
    {
      nums: [
        {
          val: '467',
          index: 0,
        }, {
          val: '114',
          index: 5,
        },
      ],
      symbols: []
    },
    {
      nums: [],
      symbols: [
        {
          val: '*',
          index: 3,
        }
      ],
    },
    {
      nums: [
        {
          val: '35',
          index: 2,
        },
        {
          val: '633',
          index: 6,
        }
      ],
      symbols: [],
    },
    {
      nums: [],
      symbols: [
        {
          val: '#',
          index: 6,
        }
      ],
    }
  ];
  const expectedResults = [467, 35, 633];

  expect(findPartNums(rows)).toEqual(expectedResults);
});
