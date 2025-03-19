const kata = "hello_123";

const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphanumeric = (kata) => {
  if (kata === "") return false;

  let result = true;

  kata.split("").forEach((char) => {
    if (
      result &&
      (!!chars.includes(char.toLowerCase()) || !!Number(char) || char === "0")
    ) {
      result = true;
    } else {
      result = false;
    }
  });

  return result;
};

// Another shor way
// const alphanumeric = (kata) => {
//   return /^[a-zA-Z0-9]+$/.test(kata);
// };

// const alphanumeric = (kata) => {
//   if (!kata) return false;

//   for (let i = 0; i < kata.length; i++) {
//     let char = kata[i];
//     if (
//       !(char >= "A" && char <= "Z") &&
//       !(char >= "a" && char <= "z") &&
//       !(char >= "0" && char <= "9")
//     ) {
//       return false;
//     }
//   }

//   return true;
// };

console.log(alphanumeric(kata));
