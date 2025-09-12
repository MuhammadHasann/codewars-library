export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) =>
  arrayOfSheep.filter((item) => !!item).length;
