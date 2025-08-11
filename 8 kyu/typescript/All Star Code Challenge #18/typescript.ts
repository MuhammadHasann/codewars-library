export const strCount = (word: string, char: string): number => {
  if (word === "" || char.length > 1) return 0;

  const arr = word.split("");
  const res = arr.filter((item) => item === char);

  return res.length;
};
