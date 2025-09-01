export const drawStairs = (n: number): string =>
  Array.from(
    { length: n },
    (_, i) => `${" ".repeat(i)}I${n === i + 1 ? "" : "\n"}`
  ).join("");
