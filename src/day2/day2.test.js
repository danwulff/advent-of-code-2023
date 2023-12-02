const { day2, parseGame, isGamePossible, maxCubesInGame } = require("./day2");

let input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

test("day2", () => {
  const result = day2(input);
  expect(result.partOne).toBe(8);
  expect(result.partTwo).toBe(2286);
});

test('parseGame', () => {
  expect(parseGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'))
    .toEqual({
      id: 1,
      sets: [{
        blue: 3,
        red: 4
      }, {
        red: 1,
        green: 2,
        blue: 6
      }, {
        green: 2,
      }]
    });
  expect(parseGame('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'))
    .toEqual({
      id: 3,
      sets: [{
        green: 8,
        blue: 6,
        red: 20,
      }, {
        red: 4,
        green: 13,
        blue: 5
      }, {
        green: 5,
        red: 1,
      }]
    });
});

test('isGamePossible', () => {
  expect(
    isGamePossible({
      blue: 6,
      red: 4,
      green: 2,
    }, {
      red: 12,
      green: 13,
      blue: 14,
    })
  ).toBe(true);
  expect(
    isGamePossible({
      red: 14,
      blue: 15,
      green: 3,
    }, {
      red: 12,
      green: 13,
      blue: 14,
    })
  ).toBe(false);
});

test('minGameCubes', () => {
  expect(maxCubesInGame({
    id: 1,
    sets: [{
      blue: 3,
      red: 4
    }, {
      red: 1,
      green: 2,
      blue: 6
    }, {
      green: 2,
    }]
  })).toEqual({ red: 4, green: 2, blue: 6 });
  expect(maxCubesInGame({
    id: 4,
    sets: [{
      green: 1,
      blue: 6,
      red: 3
    }, {
      red: 6,
      green: 3,
    }, {
      green: 3,
      blue: 15,
      red: 14,
    }]
  }, {
    red: 12,
    green: 13,
    blue: 14,
  })
  ).toEqual({ red: 14, green: 3, blue: 15 });
});
