const message: string = "a ab abc abcd abcde";

export const high = (kata: string): string => {
  const word = kata.toLowerCase().split(" ");
  const charScore = [...Array(26)].reduce((acc, _, i) => {
    acc[String.fromCharCode(97 + i)] = i + 1;
    return acc;
  }, {} as Record<string, number>);

  const result = word.reduce(
    (highest, word) => {
      const score = [...word].reduce(
        (sum, char) => sum + (charScore[char] || 0),
        0
      );
      return score > highest.score ? { word, score } : highest;
    },
    { word: "", score: 0 }
  ).word;

  return result;
};

console.log(high(message));
