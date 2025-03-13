const extend = (...objects) => {
  const result = {};

  for (const obj of objects) {
    if (typeof obj !== "object" || obj === null) continue;

    for (const key in obj) {
      if (!(key in result)) {
        result[key] = obj[key];
      }
    }
  }

  return result;
};

console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 }));
