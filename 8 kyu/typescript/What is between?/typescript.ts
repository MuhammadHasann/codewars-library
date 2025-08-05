export const between = (a: number, b: number): number[] => {
  let res: number[] = [];

  for (let i = a; i <= b; i++) {
    res.push(i);
  }

  return res;
};
