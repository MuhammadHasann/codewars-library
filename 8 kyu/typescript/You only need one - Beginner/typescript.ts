export const check = (a: (number | string)[], x: number | string): boolean =>
  a.filter((item) => item === x).length > 0 ? true : false;
