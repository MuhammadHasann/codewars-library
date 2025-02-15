const phone: number = 79052479075;
const pattern: string = "+# (###) ### ##-##";

export const formatNumber = (num: number, pattern: string): string => {
  const targetChar = "#";

  const phone = num.toString();
  const arrPattern = pattern.split("");
  const patternLength = arrPattern.filter((item) => item === "#");

  if (patternLength.length && phone.length < patternLength.length)
    return "Invalid phone number";

  let result = pattern;
  let numberIndex = 0;

  if (patternLength.length) {
    result = arrPattern
      .map((item) => (item === targetChar ? phone[numberIndex++] : item))
      .join("");
  }

  return result;
};

// Another short way
// export const formatNumber = (num: number, pattern: string): string => {
//   const phone = num.toString();
//   const countHashes = (pattern.match(/#/g) || []).length;

//   if (countHashes && phone.length < countHashes) return "Invalid phone number";

//   let index = 0;
//   return countHashes ? pattern.replace(/#/g, () => phone[index++]) : pattern;
// };

console.log(formatNumber(phone, pattern));
