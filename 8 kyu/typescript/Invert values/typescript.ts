export const invert = (arr: number[]): number[] =>
  arr.map((item) => (item < 0 ? Math.abs(item) : -item));
