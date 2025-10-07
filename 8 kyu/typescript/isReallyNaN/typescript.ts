export const isReallyNaN = (val: any): boolean =>
  typeof val === "number" && val !== val;
