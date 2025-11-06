export const gooseFilter = (birds: string[]): string[] => {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.reduce((acc: string[], curr: string) => {
    if (!geese.includes(curr)) acc.push(curr);

    return acc;
  }, []);
};
