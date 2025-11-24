export const toCsvText = (array: number[][]): string =>
  array.map((item) => item.join(",")).join("\n");
