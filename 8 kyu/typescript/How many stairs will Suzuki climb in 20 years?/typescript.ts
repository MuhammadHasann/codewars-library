export const stairsIn20 = (stairs: number[][]): number =>
  stairs.flat().reduce((acc, curr) => acc + curr, 0) * 20;
