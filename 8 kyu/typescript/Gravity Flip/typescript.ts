export const flip = (dir: string, arr: number[]): number[] =>
  arr.sort((a, b) => (dir === "R" ? a - b : b - a));
