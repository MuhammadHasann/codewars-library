export const squareOrSquareRoot = (arr: number[]): number[] =>
  arr.map((n) => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2));
