const num: number[] = [1, 1, 1, 2, 1, 1];

export const findUniq = (num: number[]): number => {
  const countMap = new Map<number, number>();

  for (let n of num) {
    countMap.set(n, (countMap.get(n) || 0) + 1);
  }

  for (let [key, value] of countMap) {
    if (value == 1) return key;
  }

  return -1;
};

// Another short way
// export const findUniq = (num: number[]): number => {
//   return num.find(n => num.indexOf(n) === num.lastIndexOf(n))!;
// };

console.log(findUniq(num));
