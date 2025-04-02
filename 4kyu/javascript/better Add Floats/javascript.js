const add = (...args) => {
  if (
    !args.every(
      (num) =>
        typeof num === "number" ||
        (typeof num === "string" && /^\d*\.?\d+$/.test(num))
    )
  ) {
    return NaN;
  }

  let numbers = args.map((num) => num.toString().split("."));
  let integerParts = numbers.map((num) => num[0].replace(/^0+/, "") || "0");
  let decimalParts = numbers.map((num) => num[1] || "");

  let maxDecimalLength = Math.max(...decimalParts.map((d) => d.length));

  decimalParts = decimalParts.map((d) => d.padEnd(maxDecimalLength, "0"));

  let carry = 0,
    decimalSum = "";
  for (let i = maxDecimalLength - 1; i >= 0; i--) {
    let sum = decimalParts.reduce((acc, d) => acc + Number(d[i]), carry);
    decimalSum = (sum % 10) + decimalSum;
    carry = Math.floor(sum / 10);
  }

  let maxIntegerLength = Math.max(...integerParts.map((i) => i.length));
  let integerSum = "";
  for (let i = 0; i < maxIntegerLength; i++) {
    let sum = integerParts.reduce(
      (acc, int) => acc + Number(int[int.length - 1 - i] || 0),
      carry
    );
    integerSum = (sum % 10) + integerSum;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) integerSum = carry + integerSum;

  if (integerSum === "") integerSum = "0";

  decimalSum = decimalSum.replace(/0+$/, "");

  return decimalSum ? `${integerSum}.${decimalSum}` : integerSum;
};
