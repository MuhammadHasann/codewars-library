export const findDifference = (a: number[], b: number[]): number =>
  Math.abs(
    a.reduce((acc, curr) => acc * curr, 1) -
      b.reduce((acc, curr) => acc * curr, 1)
  );
