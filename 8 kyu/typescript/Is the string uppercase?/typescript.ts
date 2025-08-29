export const isUpperCase = (str: string): boolean =>
  str
    .replaceAll(" ", "")
    .split("")
    .filter((item) => item === item.toLowerCase()).length > 0
    ? false
    : true;
