export const capitalizeWord = (word: string): string =>
  word[0] === word[0].toUpperCase()
    ? word
    : word[0].toUpperCase() + word.substring(1);
