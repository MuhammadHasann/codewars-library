export const sumMix = (x: any[]): number =>
  x.reduce((acc, cur) => Number(cur) + acc, 0);
