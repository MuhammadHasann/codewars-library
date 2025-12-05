export const stringy = (n: number): string =>
  Array.from({ length: n }, (_, i) => (i % 2 === 0 ? "1" : "0")).join("");
