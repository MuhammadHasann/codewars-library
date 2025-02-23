const arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = [5, 6];

const searchArray = (arr, target) => {
  if (!Array.isArray(arr) || !Array.isArray(target))
    throw new Error("Invalid input");

  if (!arr.every((sub) => Array.isArray(sub) && sub.length === 2))
    throw new Error("Invalid array structure");

  if (target.length !== 2) throw new Error("Invalid target");

  return arr.findIndex((sub) => sub[0] === target[0] && sub[1] === target[1]);
};

console.log(searchArray(arrayToSearch, target));
