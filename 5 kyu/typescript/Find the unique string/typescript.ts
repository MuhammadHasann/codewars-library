const kata: string[] = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];

export const findUniq = (kata: string[]): string => {
  const filterArr = kata.filter((item) => item !== " ");
  const arr = filterArr.map(
    (item) => item.replace(/\s/g, "").split("").sort()[0]
  );
  const uniq = arr.find((char) => arr.indexOf(char) === arr.lastIndexOf(char));
  const index = arr.indexOf(uniq!);

  return filterArr[index];
};

// Another short way
// export const findUniq = (kata: string[]) => {
//   const freqMap = new Map<string, number>();

//   const normalized = kata.map((word) =>
//     [...new Set(word.toLowerCase().replace(/\s/g, ""))].sort().join("")
//   );

//   for (let pattern of normalized) {
//     freqMap.set(pattern, (freqMap.get(pattern) || 0) + 1);
//   }

//   const uniquePattern = [...freqMap.entries()].find(
//     ([_, count]) => count === 1
//   )?.[0];

//   return kata[normalized.indexOf(uniquePattern!)];
// };

console.log(findUniq(kata));
