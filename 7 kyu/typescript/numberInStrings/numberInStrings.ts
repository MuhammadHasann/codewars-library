export const solve = (s: string): number => {
  const numberGroups: string[] | null = s.match(/\d+/g);

  if (!numberGroups) return -1;

  return Math.max(...numberGroups.map(Number));
};
