const a: number[] = [1, 2, 2, 2, 5, 6, 3, 3, 8, 8, 7];
const b: number[] = [1, 5, 2, 2];

export const arrayDiff = (a: number[], b: number[]): number[] => {
  return a.filter((item) => !b.includes(item));
};

// Anothe way
// export const arrayDiff = (a: number[], b: number[]): number[] => {
//   const setB = new Set(b);
//   return a.filter(item => !setB.has(item));
// }

console.log(arrayDiff(a, b));
