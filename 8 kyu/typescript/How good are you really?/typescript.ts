export const betterThanAverage = (
  classPoints: number[],
  yourPoints: number
): boolean =>
  classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length <
  yourPoints;
