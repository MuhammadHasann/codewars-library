export const fakeBin = (x: string): string =>
  x
    .split("")
    .map((item) => (item < "5" ? "0" : "1"))
    .join("");
