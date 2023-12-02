function day2(input) {
  const games = input.trim().split('\n');
  const totalCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const result = {
    partOne: 0,
    partTwo: 0,
  };

  games.forEach(game => {
    const parsedGame = parseGame(game);
    const maxCubesInThisGame = maxCubesInGame(parsedGame);
    if (isGamePossible(maxCubesInThisGame, totalCubes)) {
      result.partOne += parsedGame.id;
    }
    result.partTwo += (maxCubesInThisGame.red * maxCubesInThisGame.green * maxCubesInThisGame.blue);
  });
  return result;
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

function isGamePossible(maxCubes, totalCubes) {
  if (totalCubes.red < maxCubes.red ||totalCubes.green < maxCubes.green || totalCubes.blue < maxCubes.blue) {
    return false
  }
  return true;
}

function maxCubesInGame(parsedGame) {
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
  maxCubesInGame,
};
