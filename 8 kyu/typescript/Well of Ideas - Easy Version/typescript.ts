export const well = (x: string[]): string =>
  ((c) => (c > 2 ? "I smell a series!" : c ? "Publish!" : "Fail!"))(
    x.filter((v) => v === "good").length
  );
