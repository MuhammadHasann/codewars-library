export const squareSum = (numbers: number[]): number =>
  numbers.reduce((acc, curr) => curr * 2 + acc, 0);
