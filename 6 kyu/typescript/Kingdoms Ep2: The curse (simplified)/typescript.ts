const speech = "***lo w***d!";
const vocabulary = ["hello", "world"];

export const translate = (speech: string, vocab: string[]): string => {
  return speech
    .split(" ")
    .map((word) => {
      const cleanWord = word.replace(/[^a-zA-Z*]/g, "");
      const match = vocab.find(
        (v) =>
          cleanWord.length === v.length &&
          [...cleanWord].every((c, i) => c === "*" || c === v[i])
      );

      return match ? word.replace(cleanWord, match) : word;
    })
    .join(" ");
};

console.log(translate(speech, vocabulary));
