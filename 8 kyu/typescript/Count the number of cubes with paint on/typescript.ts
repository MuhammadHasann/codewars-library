export const countSquares = (cuts: number): number =>
  cuts === 0 ? 1 : 6 * cuts * cuts + 2;
