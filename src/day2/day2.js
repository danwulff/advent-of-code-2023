function day2(input) {
  const games = input.trim().split('\n');
  const maxCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const sumGameIds = games.reduce((accum, game) => {
    const parsedGame = parseGame(game);
    if (isGamePossible(parsedGame, maxCubes)) {
      return accum + parsedGame.id;
    }
    return accum;
  }, 0);

  const sumMinCubePowers = games.reduce((accum, game) => {
    const minCubes = minGameCubes(parseGame(game));
    return accum + (minCubes.red * minCubes.green * minCubes.blue);
  }, 0);

  return {
    partOne: sumGameIds,
    partTwo: sumMinCubePowers,
  };
}

function parseGame(game) {
  const [gameRaw, setsRaw] = game.split(':');
  const id = Number(gameRaw.trim().split(' ')[1]);
  const sets = setsRaw.trim().split(';').map(set => {
    const parsedSet = {};
    const colors = set.split(',');
    colors.forEach(colorRaw => {
      const [number, color] = colorRaw.trim().split(' ');
      parsedSet[color] = Number(number);
    });
    return parsedSet;
  });

  return {
    id,
    sets,
  };
}

function isGamePossible(parsedGame, totalColors) {
  const gameMax = minGameCubes(parsedGame);

  if (totalColors.red < gameMax.red ||totalColors.green < gameMax.green || totalColors.blue < gameMax.blue) {
    return false
  }
  return true;
}

function minGameCubes(parsedGame) {
  const gameMax = {
    red: 0,
    blue: 0,
    green: 0,
  };

  parsedGame.sets.forEach((set) => {
    Object.keys(gameMax).forEach((key) => {
      if (gameMax[key] < set[key]) {
        gameMax[key] = set[key];
      }
    })
  });

  return gameMax;
}

module.exports = {
  day2,
  parseGame,
  isGamePossible,
  minGameCubes,
};