const message: string = "Why isn't my code working?";

const vaporCode = (message: string): string => {
  // const trim = message.toUpperCase().split("").filter(keyword => keyword.trim(" ")).join("  ")
  const trim = message.toUpperCase().replace(/\s+/g, "").split("").join("  ");

  return trim;
};

console.log(vaporCode(message));
