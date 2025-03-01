const kata: string = "aaabbbaaac";

export const longestRepetition = (kata: string): [string, number] => {
  if (!kata) return ["", 0];

  let maxChar = kata[0];
  let maxCount = 1;
  let currentChar = kata[0];
  let currentCount = 1;

  for (let i = 1; i < kata.length; i++) {
    if (kata[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = kata[i];
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxChar = currentChar;
      maxCount = currentCount;
    }
  }

  return [maxChar, maxCount];
};

// Complex way
// export const longestRepetition = (kata: string): [string, number] => {
//     if (!kata) return ["", 0]

//     const arr = kata.split("")

//     let lastChar = ""
//     let lastIndex = 0
//     let arrRepetition = [""]

//     for (let char of arr) {
//         if (lastChar !== char) {
//             lastChar = char
//             lastIndex++
//             arrRepetition.push(char)
//         } else {
//             arrRepetition[lastIndex] = arrRepetition[lastIndex] + char
//         }
//     }

//     const valueRepetition = arrRepetition.map(char => char.length)
//     const index = valueRepetition.indexOf(Math.max(...valueRepetition))

//     const result = [arrRepetition[index][0], valueRepetition[index]]

//     return result
// }

console.log(longestRepetition(kata));
