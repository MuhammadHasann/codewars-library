const message: string = "ABBCcAD";
// const message: number[] = [1,2,2,3,3];

export const uniqueInOrder = (
  kata: string | (string | number | undefined)[]
): (string | number | undefined)[] => {
  let arr;
  let lastChar: string | number | undefined;

  if (typeof kata === "string") {
    arr = kata.split("");
  } else {
    arr = kata;
  }

  const result = arr.map((item: string | number | undefined) => {
    if (item !== lastChar) {
      lastChar = item;
      return item;
    }
  });

  return result.filter(
    (item: string | number | undefined) => item !== undefined
  );
};

// Another short way
// export const uniqueInOrder = (kata: string | (string | number | undefined)[]):(string | number | undefined)[] => {
//     if (typeof kata === "string") {
//         return kata.split("").filter((item, i, arr) => i === 0 || item !== arr[i - 1]);
//     } else {
//         return kata.filter((item, i, arr) => i === 0 || item !== arr[i - 1]);
//     }
// }

console.log(uniqueInOrder(message));
