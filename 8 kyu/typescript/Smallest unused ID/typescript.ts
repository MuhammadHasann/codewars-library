export const nextId = (ids: number[]): number => {
  const sortArr = new Set(ids);

  let smallest: number = 0;

  while (true) {
    if (!sortArr.has(smallest)) return smallest;
    smallest++;
  }
};
