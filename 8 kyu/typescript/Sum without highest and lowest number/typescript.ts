export const sumArray = (array: number[] | null): number =>
  !array || array.length < 3
    ? 0
    : array
        .slice()
        .sort((a, b) => a - b)
        .slice(1, array.length - 1)
        .reduce((acc, curr) => acc + curr, 0);
