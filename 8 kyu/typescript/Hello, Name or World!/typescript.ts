export const hello = (name?: string): string =>
  `Hello, ${
    !!name
      ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      : "World"
  }!`;
