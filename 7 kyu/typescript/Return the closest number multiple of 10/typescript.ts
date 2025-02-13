const num: number = 37;

export const closestMultiple10 = (num: number): number => {
  const numeric = 10;
  const float = num / numeric;

  return Math.round(float) * numeric;
};

// Other Ways
// export const closestMultiple10 = (num: number): number => {
//   const factor = 10;
//   return Math.round(num / factor) * factor;
// };

console.log(closestMultiple10(num));
