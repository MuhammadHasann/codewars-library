export const divisibleBy = (numbers: number[], divisor: number): number[] =>
  numbers.filter((item) => item % divisor === 0);
