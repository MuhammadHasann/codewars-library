export const remove = (s: string): string =>
  s.charAt(s.length - 1) === "!" ? s.slice(0, -1) : s;
