const fs = require("fs");

const input = fs.readFileSync("input", "utf8");

const letters = input.split("\n").map((m) => {
  const letters = m.split("");
  const set = new Set(letters);
  return set;
});

const values = letters.reduce((accumulator, _, currentIndex, array) => {
  if (currentIndex > 0 && (currentIndex + 1) % 3 === 0) {
    const a = array[currentIndex - 2];
    const b = array[currentIndex - 1];
    const c = array[currentIndex - 0];

    const sum = [...Array.from(a), ...Array.from(b), ...Array.from(c)];

    const values = sum
      .sort()
      .reduce((accumulator, currentValue, currentIndex, array) => {
        if (isNaN(Number(accumulator))) {
          return accumulator;
        }
        if (currentValue === array[currentIndex - 1]) {
          if (accumulator === 2) {
            return currentValue;
          }
          accumulator++;
        } else {
          accumulator = 1;
        }
        return accumulator;
      }, 1);

    return [...accumulator, values];
  }
  return accumulator;
}, []);
const answer = values
  .map((ch) => ch.charCodeAt(0))
  .map((n) => (n < 97 ? n - 38 : n - 96))
  .reduce((a, b) => a + b);

// console.log("APAN letters", letters);
console.log("APAN values", values.length);
console.log("APAN answer", answer);
