const hexColor: string = "#fEF";

const decimal: Record<string, number> = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

const hasNumber = (str: string): boolean => /\d/.test(str);
const getDecimal = (first: string, second: string): number =>
  (hasNumber(first) ? Number(first) : decimal[first]) * 16 +
  (hasNumber(second) ? Number(second) : decimal[second]) * 1;

export const hexStringToRGB = (color: string): Record<string, number> => {
  let hex: string = color.replace("#", "").toLowerCase();

  if (hex.length < 6 && hex.length > 3) hex = hex.slice(0, 2);
  if (hex.length <= 3)
    hex = hex
      .split("")
      .map((char) => char.repeat(2))
      .join("");

  const result: Record<string, number> = {
    r: getDecimal(hex[0], hex[1]),
    g: getDecimal(hex[2], hex[3]),
    b: getDecimal(hex[4], hex[5]),
  };

  return result;
};

// Another short way
// export const hexStringToRGB = (color: string): Record<string, number> => {
//   let hex = color.replace("#", "").toLowerCase();

//   if (hex.length === 3) {
//     hex = hex
//       .split("")
//       .map((char) => char + char)
//       .join("");
//   }

//   const r = parseInt(hex.slice(0, 2), 16);
//   const g = parseInt(hex.slice(2, 4), 16);
//   const b = parseInt(hex.slice(4, 6), 16);

//   return { r, g, b };
// };

console.log(hexStringToRGB(hexColor));
