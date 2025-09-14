export const summation = (num: number): number =>
  Array.from({ length: num }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  );
