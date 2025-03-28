const num = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];

const solution = (num) => {
  let res = [];
  let arrRange = [num[0]];

  for (let i = 1; i <= num.length; i++) {
    if (num[i] === num[i - 1] + 1) {
      arrRange.push(num[i]);
    } else {
      res.push(
        arrRange.length === 2
          ? `${arrRange[0]},${arrRange[1]}`
          : arrRange.length > 1
          ? `${arrRange[0]}-${arrRange[arrRange.length - 1]}`
          : +arrRange
      );
      arrRange = [num[i]];
    }
  }

  return res.join(",");
};

// Another way
// const solution = (nums) => {
//   let res = [];
//   let [start, end] = [nums[0], nums[0]];

//   for (let i = 1; i <= nums.length; i++) {
//     if (nums[i] === end + 1) {
//       end = nums[i];
//     } else {
//       res.push(
//         start === end
//           ? `${start}`
//           : end - start === 1
//           ? `${start},${end}`
//           : `${start}-${end}`
//       );
//       [start, end] = [nums[i], nums[i]];
//     }
//   }

//   return res.join(",");
// };

console.log(solution(num));
