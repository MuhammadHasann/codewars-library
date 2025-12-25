export const abbrevName = (name: string): string =>
  name
    .split(" ")
    .map((item) => item.charAt(0))
    .join(".")
    .toUpperCase();
