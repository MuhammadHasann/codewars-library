const kata: string = "Example Input";

export const stringTransformer = (kata: string): string => {
  const result = kata
    .split(" ")
    .map((char) => {
      return char
        .split("")
        .map((item) => {
          if (/^[A-Z]+$/.test(item)) {
            return item.toLowerCase();
          } else {
            return item.toUpperCase();
          }
        })
        .join("");
    })
    .reverse()
    .join(" ");

  return result;
};

console.log(stringTransformer(kata));
