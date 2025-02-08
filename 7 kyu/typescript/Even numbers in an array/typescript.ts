const kata: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = (n: number[], length: number): number[] => {
  // Another ways
  // return n
  //     .filter(item => item % 2 === 0)
  //     .slice(-length);

  let result: number[] = [];

  const a = n;
  const b = a.map((item) => {
    if (item % 2 !== 0) return false;

    result.push(item);
    return true;
  });

  return result.slice(-length);
};

console.log(even(kata, 1));
