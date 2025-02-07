const text: string = "abcd\nefgh\nijkl\nmnop";

const scale = (a: string, double: number, loop: number) => {
  if (!a) return "";

  const rows = a.split("\n");

  const scaledRows = rows.map((row) => {
    const scaledChars = row.split("").map((char) => {
      return char.repeat(double);
    });

    return scaledChars.join("");
  });

  const result = scaledRows.map((row) => Array(loop).fill(row).join("\n"));

  return result.join("\n");
};

// another ways
// const scale = (a: string, double: number, loop: number) => {
//   return a
//     .split("\n")
//     .flatMap(row => {
//       const scaledRow = row.split("").map(char => char.repeat(double)).join("");
//       return Array(loop).fill(scaledRow);
//     })
//     .join("\n");
// };

console.log(scale(text, 2, 3));
