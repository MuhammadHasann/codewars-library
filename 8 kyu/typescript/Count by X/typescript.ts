export const countBy = (x: number, n: number): number[] =>
  Array.from({ length: n }, (_, i) => x * (i + 1));
