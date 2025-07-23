const letter: Record<number, string> = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

export const switchItUp = (int: number): string =>
  int >= 0 && int <= 9 ? letter[int] : "Out of number";
