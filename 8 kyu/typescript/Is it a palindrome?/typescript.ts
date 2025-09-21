export const isPalindrome = (x: string): boolean =>
  x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
