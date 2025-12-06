export const sameCase = (a: string, b: string): number =>
  /[a-zA-Z]/.test(a) && /[a-zA-Z]/.test(b)
    ? /[A-Z]/.test(a) === /[a-zA-Z]/.test(b)
      ? 1
      : 0
    : -1;
