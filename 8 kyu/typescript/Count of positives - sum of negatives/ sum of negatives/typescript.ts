export const countPositivesSumNegatives = (
  input: number[] | null
): number[] => {
  if (!input || input.length === 0) return [];

  const countPostive = input?.filter((item) => item > 0).length;
  const sumNegative = input
    ?.filter((item) => item < 0)
    .reduce((acc, curr) => acc + curr, 0);

  return [countPostive, sumNegative];
};
