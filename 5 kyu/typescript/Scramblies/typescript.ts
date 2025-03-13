const random: string = "katas";
const kata: string = "steak";

export const scramble = (str1: string, str2: string): boolean => {
  const charCount: Record<string, number> = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};

// Another way
// export const scramble = (str1: string, str2: string): boolean => {
//   let arr1 = str1.split("");
//   const arr2 = str2.split("");

//   for (let i = 0; i < arr2.length; i++) {
//     const index = arr1.findIndex((char) => char === arr2[i]);
//     if (index === -1) return false;
//     arr1 = [...arr1.slice(0, index), ...arr1.slice(index + 1)];
//   }

//   return true;
// };

console.log(scramble(random, kata));
