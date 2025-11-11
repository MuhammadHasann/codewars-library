export const arr2bin = (arr: any[]): string =>
  arr
    .filter((x) => typeof x === "number")
    .reduce((acc, curr) => curr + acc, 0)
    .toString(2);
