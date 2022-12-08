const fs = require("fs");

const input = fs.readFileSync("input", "utf8");

const letters = input
  .split("\n")
  .map((m) => {
    const half = m.length / 2;
    const firstPart = m.slice(0, half).split("");
    const secondPart = m.slice(half, m.length).split("");

    return firstPart.filter((ch) => secondPart.includes(ch));
  })
  .map((arr) => arr[0])
  .flat();

const values = letters
  .map((ch) => ch.charCodeAt(0))
  .map((n) => (n < 97 ? n - 38 : n - 96));

// a -> z / 1 -> 26 / 97 -> 122
// A -> Z / 27 -> 52 / 65 -> 90

const answer = values.reduce((a, b) => a + b);

console.log("APAN letters", letters);
console.log("APAN values", values);
console.log("APAN answer", answer);
