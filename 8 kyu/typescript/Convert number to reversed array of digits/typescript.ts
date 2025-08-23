export const digitize = (num: number): number[] =>
  `${num}`
    .split("")
    .reverse()
    .map((item) => Number(item));
