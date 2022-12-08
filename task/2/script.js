const fs = require("fs");

const input = fs.readFileSync("input", "utf8");

const pointsForMove = {
  X: 1,
  Y: 2,
  Z: 3,
};

const matchOutcome = {
  lose: 0,
  draw: 3,
  won: 6,
};

// A X
// B Y
// C Z

const answer = input
  .split("\n")
  .map((m) => {
    const result = m.charCodeAt(0) - m.charCodeAt(2) + 23;
    const movePoint = pointsForMove[m[2]];

    if (result === 0) {
      return matchOutcome.draw + movePoint;
    } else if ([-2, 1].includes(result)) {
      return matchOutcome.lose + movePoint;
    } else if ([-1, 2].includes(result)) {
      return matchOutcome.won + movePoint;
    }
  })
  .reduce((a, b) => a + b);

console.log("APAN answer", answer);
