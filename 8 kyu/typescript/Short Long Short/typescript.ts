export const shortLongShort = (a: string, b: string): string =>
  a.length > b.length ? b + a + b : a + b + a;
