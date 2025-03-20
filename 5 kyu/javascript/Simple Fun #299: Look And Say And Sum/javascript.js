const lookAndSayAndSum = (n) => {
  let look = ["1"];

  while (--n) {
    let next = [];
    let count = 1;

    for (let i = 1; i <= look.length; i++) {
      if (look[i] === look[i - 1]) {
        count++;
      } else {
        next.push(count.toString(), look[i - 1]);
        count = 1;
      }
    }

    look = next;
  }

  return look.reduce((sum, digit) => sum + +digit, 0);
};

// Longer way
// const lookAndSayAndSum = (n) => {
//   if (n === 1) return 1;

//   let look = "1";

//   for (let i = 1; i < n; i++) {
//     let say = "";
//     let count = 1;

//     for (let j = 1; j <= look.length; j++) {
//       if (look[j] === look[j - 1]) {
//         count++;
//       } else {
//         say += +count.toString() + look[j - 1];
//         count = 1;
//       }
//     }

//     look = say;
//   }

//   return look.split("").reduce((acc, curr) => acc + Number(curr), 0);
// };

// Another way
// const lookAndSayAndSum = (n) => {
//   if (n === 1) return 1;

//   let look = "1";

//   while (--n) look = look.replace(/(\d)\1*/g, (num) => num.length + num[0]);

//   return look.split("").reduce((a, b) => a + Number(b), 0);
// };

console.log(lookAndSayAndSum(4));
