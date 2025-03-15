const array = [
  1,
  [2, 3],
  [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17],
  18,
];

const flattenTwoLevels = (arr) => {
  return arr.map((item) => {
    if (Array.isArray(item) && item.length > 0) {
      return item.flat(Infinity);
    } else {
      return item;
    }
  });
};

// Another way
// const flattenTwoLevels = (arr) => {
//   return arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       const flattened = item.flat(Infinity);
//       acc.push(flattened);
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// };

console.log(flattenTwoLevels(array));
