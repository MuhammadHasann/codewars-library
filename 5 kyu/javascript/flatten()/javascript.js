function flatten() {
  const result = [];

  (function flat(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        result.push(item);
      }
    }
  })(arguments);

  return result;
}

console.log(flatten("a", ["b", 2], 3, null, [[4], ["c"]]));
