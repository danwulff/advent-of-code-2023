const digit = /(\d+)/g;

function day4(input) {
  const originalCards = input.trim().split('\n').map(card => parseCard(card));
  let partOne = 0;
  originalCards.forEach(card => {
    let cardVal = 0;
    card.winningNums.forEach(winningNum => {
      const winnerWinner = card.myNums.some(myNum => winningNum === myNum);
      if (winnerWinner && cardVal === 0) {
        cardVal = 1;
      } else if (winnerWinner) {
        cardVal = cardVal * 2;
      }
    });
    partOne += cardVal;
  });

  let partTwo = 0;
  const cards = [...originalCards];
  while (cards.length) {
    partTwo += 1;
    const card = cards.pop();
    let cardVal = 0;
    card.winningNums.forEach(winningNum => {
      const winnerWinner = card.myNums.some(myNum => winningNum === myNum);
      if (winnerWinner) {
        cardVal += 1;
      }
    });
    while (cardVal) {
      const index = originalCards.indexOf(card);
      cards.push(originalCards[index + cardVal]);
      cardVal -= 1;
    }
  }

  return {
    partOne,
    partTwo,
  };
}

function parseCard(card) {
  const [cardNum, numbers] = card.split(':');
  const [ winningNums, myNums] = numbers.split('|');
  return {
    card: cardNum.match(digit)[0],
    winningNums: Array.from(winningNums.matchAll(digit), m => m[0]),
    myNums: Array.from(myNums.matchAll(digit), m => m[0]),
  }
}

module.exports = {
  day4,
};
