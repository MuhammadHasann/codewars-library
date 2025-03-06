const list: string = "56 65 74 100 99 68 86 180 90";

export const orderWeight = (list: string): string => {
  const arr = list.split(" ").map((item) => ({
    [item]: item
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0),
  }));

  const sortArr = arr.sort((a, b) => {
    const [keyA, valueA] = Object.entries(a)[0];
    const [keyB, valueB] = Object.entries(b)[0];

    if (valueA !== valueB) return valueA - valueB;

    return keyA.localeCompare(keyB);
  });

  return sortArr.map((item) => Object.keys(item)).join(" ");
};

// Another shor way
// export const orderWeight = (list: string): string => {
//   return list
//     .trim()
//     .split(/\s+/)
//     .map((num) => [
//       num,
//       num.split("").reduce((acc, digit) => acc + Number(digit), 0),
//     ])
//     .sort((a, b) => {
//       const [nameA, weightA] = a as [string, number];
//       const [nameB, weightB] = b as [string, number];
//       return weightA - weightB || nameA.localeCompare(nameB);
//     })
//     .map(([num]) => num)
//     .join(" ");
// };

console.log(orderWeight(list));
