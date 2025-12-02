export const sumOfDifferences = (arr: number[]): number =>
  arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
