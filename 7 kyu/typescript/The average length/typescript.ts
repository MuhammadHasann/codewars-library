const kata: string[] = ["aa", "bb", "ddd", "eee"];

const averageLength = (kata: string[]) => {
  const avg = Math.round(
    kata.reduce((acc, curr) => acc + curr.length, 0) / kata.length
  );
  const scalling = kata.map((item) => {
    const slice = item.length > 1 ? item.slice(-1) : item;

    return slice.repeat(avg);
  });

  return scalling;
};

console.log(averageLength(kata));
