export const reverseSeq = (n: number): number[] =>
  Array.from({ length: n }, (_, i) => i + 1).reverse();
