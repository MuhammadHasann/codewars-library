export const twoSort = (s: string[]): string =>
  s
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0]
    .split("")
    .join("***");
