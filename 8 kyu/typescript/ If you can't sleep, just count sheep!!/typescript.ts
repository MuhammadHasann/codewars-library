export const countSheep = (num: number): string =>
  Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");
