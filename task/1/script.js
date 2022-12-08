const sumFn = (a, b) => a + b;
const sortFn = (a, b) => b - a;

const input = process.argv[2];

const answer = input
  .split("\n\n")
  .map((g) =>
    g
      .split("\n")
      .map((l) => Number(l))
      .reduce(sumFn)
  )
  .sort(sortFn)
  .splice(0, 3)
  .reduce(sumFn);

console.log("APAN answer", answer);
