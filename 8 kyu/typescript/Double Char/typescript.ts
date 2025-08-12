export const doubleChar = (str: string): string =>
  str
    .split("")
    .map((item) => item + item)
    .join("");
