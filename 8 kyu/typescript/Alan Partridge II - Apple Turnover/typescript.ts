export const apple = (x: number | string): string =>
  Number(x) * Number(x) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
