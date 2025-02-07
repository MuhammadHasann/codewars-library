const message: string =
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

const duplicate = (kata: string): string => {
  // Another ways
  // return [...new Set(kata.split(" "))].join(" ")

  let result: string[] = [];

  const arr = kata.split(" ");
  const check = arr.map((item) => {
    if (result.includes(item)) return false;

    result.push(item);
    return true;
  });

  return result.join(" ");
};

console.log(duplicate(message));
