const fs = require("fs");

const input = fs.readFileSync("input", "utf8");

const pointsForMove = {
  A: 1,
  B: 2,
  C: 3,
};

const matchOutcome = {
  lose: 0,
  draw: 3,
  won: 6,
};

const winMoves = {
  A: "B",
  B: "C",
  C: "A",
};

const loseMoves = {
  A: "C",
  B: "A",
  C: "B",
};

const points = input.split("\n").map((m) => {
  const oponentMove = m[0];
  const desiredOutcome = m[2];

  switch (desiredOutcome) {
    case "X": // lose
      return matchOutcome.lose + pointsForMove[loseMoves[oponentMove]];
    case "Y": // draw
      return matchOutcome.draw + pointsForMove[oponentMove];
    case "Z": // won
      return matchOutcome.won + pointsForMove[winMoves[oponentMove]];
  }
});

const answer = points.reduce((a, b) => a + b);
console.log("APAN points", points);

console.log("APAN answer", answer);
