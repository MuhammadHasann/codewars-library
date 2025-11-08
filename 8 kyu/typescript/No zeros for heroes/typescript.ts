export const noBoringZeros = (n: number): number =>
  n !== 0 ? Number(n.toString().replace(/0+$/, "")) : 0;
