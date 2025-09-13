export const findAverage = (array: number[]): number =>
  array.length > 0
    ? array.reduce((acc, cur) => acc + cur, 0) / array.length
    : 0;
