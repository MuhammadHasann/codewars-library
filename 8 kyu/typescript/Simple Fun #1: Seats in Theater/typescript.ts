export const seatsInTheater = (
  nCols: number,
  nRows: number,
  col: number,
  row: number
) => (nRows - row) * (nCols - col + 1);
