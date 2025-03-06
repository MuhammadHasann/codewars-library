const number: number[] = [5, 6, 8, 9];
const ranges: string = "3_6,9";

export const toRange = (num: number[]): string => {
  if (num.length === 0) return "";

  num = [...new Set(num)].sort((a, b) => a - b);

  let result: string[] = [];
  let arrRange: number[] = [num[0]];

  for (let i = 1; i < num.length; i++) {
    if (num[i] === num[i - 1] + 1) {
      arrRange.push(num[i]);
    } else {
      result.push(
        arrRange.length > 1
          ? `${arrRange[0]}_${arrRange[arrRange.length - 1]}`
          : `${arrRange[0]}`
      );
      arrRange = [num[i]];
    }
  }

  result.push(
    arrRange.length > 1
      ? `${arrRange[0]}_${arrRange[arrRange.length - 1]}`
      : `${arrRange[0]}`
  );

  return result.join(",");
};

export const toArray = (ranges: string): number[] => {
  if (!ranges) return [];

  return ranges.split(",").flatMap((item) => {
    const arrSplit = item.split("_").map(Number);

    if (arrSplit.some(isNaN)) return [];
    if (arrSplit.length === 1) return arrSplit;

    return Array.from(
      { length: arrSplit[1] - arrSplit[0] + 1 },
      (_, i) => arrSplit[0] + i
    );
  });
};

console.log(toRange(number));
console.log(toArray(ranges));
