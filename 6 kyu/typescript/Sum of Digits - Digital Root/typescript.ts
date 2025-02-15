const digits: number = 493193;

export const digitalRoot = (kata: number): number => {
  let result = kata;

  while (result >= 10) {
    result = result
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
  }

  return result;
};

// Antoher short way
// export const digitalRoot = (kata: number): number => {
//   return kata === 0 ? 0 : (kata % 9 === 0 ? 9 : kata % 9);
// };

// Other way with recursion
// export const digitalRoot = (kata: number): number => {
//   if (kata < 10) return kata;

//   const sum = kata
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((acc, curr) => acc + curr, 0);

//   return digitalRoot(sum);
// };

console.log(digitalRoot(digits));
