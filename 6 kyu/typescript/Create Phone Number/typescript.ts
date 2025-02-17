const phone: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const createPhoneNumber = (phone: number[]): string => {
  return phone.every((n) => n < 10)
    ? "(###) ###-####".replace(/#/g, () => phone.shift()!.toString())
    : "Invalid phone number";
};

// Another ways
// export const createPhoneNumber = (phone: number[]): string => {
//   const pattern = "(###) ###-####";

//   if (phone.map(String).some((item) => item.length > 1))
//     return "Invalid phone number";

//   let numberIndex = 0;
//   const result = pattern
//     .split("")
//     .map((item) => (item === "#" ? phone[numberIndex++] : item))
//     .join("");

//   return result;
// };

console.log(createPhoneNumber(phone));
