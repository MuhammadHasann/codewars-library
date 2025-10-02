export const past = (h: number, m: number, s: number): number =>
  (h * 3600 + m * 60 + s) * 1000;
