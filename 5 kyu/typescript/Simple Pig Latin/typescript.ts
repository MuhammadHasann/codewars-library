const kata: string = "hello world !";

export const pigIt = (kata: string): string => {
  return kata
    .split(" ")
    .map((item) =>
      /^[a-zA-Z]+$/.test(item)
        ? item.slice(1, item.length) + item[0] + "ay"
        : item
    )
    .join(" ");
};

console.log(pigIt(kata));
