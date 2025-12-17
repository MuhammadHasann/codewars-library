export const findMultiples = (i: number, l: number): number[] =>
  Array.from({ length: Math.floor(l / i) }, (_, n) => i * (n + 1));

// Long Way
// export const findMultiples = (integer: number, limit: number): number[] => {
//   let num: number = integer;
//   let res: number[] = [];

//   while (num <= limit) {
//     res.push(num);
//     num += integer;
//   }

//   return res;
// };
