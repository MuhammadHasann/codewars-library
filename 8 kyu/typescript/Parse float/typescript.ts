export const parseF = (str: string): number | null =>
  !!isNaN(Number(str)) ? null : Number(str);
