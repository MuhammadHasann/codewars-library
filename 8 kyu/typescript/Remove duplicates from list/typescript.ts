export const distinct = (a: number[]): number[] => {
  return a.reduce((acc: number[], curr: number) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
};
