export const addLength = (words: string): string[] =>
  words.split(" ").map((item) => `${item} ${item.length}`);
