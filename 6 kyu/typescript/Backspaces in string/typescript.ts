const kata: string = "abc#d##c";

export const cleanString = (kata: string): string => {
  const stack: string[] = [];

  for (let char of kata) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

console.log(cleanString(kata));
