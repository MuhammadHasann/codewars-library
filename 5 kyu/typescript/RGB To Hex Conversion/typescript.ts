const r: number = 148;
const g: number = 0;
const b: number = 211;

const decimal: Record<number, string> = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const calculate = (code: number) => {
  const clamped = Math.max(0, Math.min(255, code));

  const first = Math.floor(clamped / 16);
  const second = clamped % 16;

  const hex1 = decimal[first] ?? first.toString();
  const hex2 = decimal[second] ?? second.toString();

  return hex1 + hex2;
};

export const rgb = (r: number, g: number, b: number): string => {
  return `${calculate(r)}${calculate(g)}${calculate(b)}`.toUpperCase();
};

// Another short away
// export const rgb = (r: number, g: number, b: number): string => {
//   const clamp = (num: number) => Math.max(0, Math.min(255, num));

//   const toHex = (num: number) =>
//     clamp(num).toString(16).toUpperCase().padStart(2, "0");

//   return toHex(r) + toHex(g) + toHex(b);
// };

console.log(rgb(r, g, b));
