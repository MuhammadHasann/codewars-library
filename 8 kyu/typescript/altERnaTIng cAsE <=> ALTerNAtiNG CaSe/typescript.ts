export const toAlternatingCase = (str: string): string =>
  str
    .split("")
    .map((item) =>
      /^[A-Z]+$/.test(item) ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
