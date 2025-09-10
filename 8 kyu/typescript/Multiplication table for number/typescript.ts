export const multiTable = (num: number): string =>
  Array.from(
    { length: 10 },
    (_, i) => `${i + 1} * ${num} = ${(i + 1) * num}`
  ).join("\n");
