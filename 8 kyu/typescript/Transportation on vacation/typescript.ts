export const rentalCarCost = (d: number): number =>
  40 * d - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
