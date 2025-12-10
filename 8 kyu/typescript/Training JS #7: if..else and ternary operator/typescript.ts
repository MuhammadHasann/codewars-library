export const saleHotdogs = (n: number): number =>
  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
