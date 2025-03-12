const numbers: number = 99000;

const numberWords: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const tensWords: Record<number, string> = {
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

export const numberToEnglish = (num: number): string => {
  if (!Number.isInteger(num) || num < 0 || num > 99999) return "zero";

  if (num < 20) return numberWords[num];

  if (num < 100) {
    const tens = Math.floor(num / 10) * 10;
    const units = num % 10;
    return units === 0
      ? tensWords[tens]
      : `${tensWords[tens]} ${numberWords[units]}`;
  }

  if (num < 1000) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return remainder === 0
      ? `${numberWords[hundreds]} hundred`
      : `${numberWords[hundreds]} hundred ${numberToEnglish(remainder)}`;
  }

  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;
  return remainder === 0
    ? `${numberToEnglish(thousands)} thousand`
    : `${numberToEnglish(thousands)} thousand ${numberToEnglish(remainder)}`;
};

console.log(numberToEnglish(numbers));
