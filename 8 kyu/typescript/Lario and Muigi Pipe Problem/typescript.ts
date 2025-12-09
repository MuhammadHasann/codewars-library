export const pipeFix = (numbers: number[]): number[] =>
  Array.from(
    { length: numbers.at(-1)! - numbers[0] + 1 },
    (_, i) => numbers[0] + i
  );
