const obj1 = { prop: true };
const obj2 = { prop: false };

const split = (
  arr: Record<string, boolean>[],
  prop: string
): Record<string, boolean>[][] =>
  arr.reduce(
    (acc: Record<string, boolean>[][], curr: Record<string, boolean>) => {
      acc[curr[prop] ? 0 : 1].push(curr);

      return acc;
    },
    [[], []]
  );

console.log(split([obj1, obj2], "prop"));
