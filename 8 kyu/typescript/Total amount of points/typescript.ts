export const points = (games: string[]): number =>
  games
    .map((item) => {
      const [x, y] = item.split(":").map(Number);

      if (x < y) {
        return 0;
      } else if (x > y) {
        return 3;
      } else if (x === y) {
        return 1;
      } else {
        return -1;
      }
    })
    .reduce((acc: number, curr: number) => acc + curr, 0);
