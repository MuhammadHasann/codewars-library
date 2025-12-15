export const getRealFloor = (n: number): number =>
  n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
