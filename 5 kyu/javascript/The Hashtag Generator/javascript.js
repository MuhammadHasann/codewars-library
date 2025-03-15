const hashtag = "    Hello     World   ";

const generateHashtag = (kata) => {
  if (!kata) return false;

  const arr = kata
    .split(" ")
    .filter((char) => char !== "")
    .map((char) => char[0].toUpperCase() + char.slice(1, char.length))
    .join("");

  return !arr || arr.length >= 140 ? false : "#" + arr;
};

// Another way
// const generateHashtag = (kata) => {
//   if (!kata.trim()) return false;

//   const result = "#" + kata
//       .split(/\s+/)
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join("");

//   return result.length > 140 ? false : result;
// };

console.log(generateHashtag(hashtag));
