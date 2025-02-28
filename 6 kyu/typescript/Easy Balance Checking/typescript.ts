// const check: string = "1000.00\r\n125 Market 125.45\r\n126 Hardware 34.95\r\n127 Video 7.45\r\n128 Book 14.32\r\n129 Gasoline 16.10"
const check: string =
  "1233.00\r\n125 Hardware;! 24.8?;\r\n123 Flowers 93.5\r\n127 Meat 120.90\r\n120 Picture 34.00\r\n124 Gasoline 11.00\r\n123 Photos;! 71.4?;\r\n122 Picture 93.5\r\n132 Tyres;! 19.00,?;\r\n129 Stamps 13.6\r\n129 Fruits{} 17.6\r\n129 Market;! 128.00?;\r\n121 Gasoline;! 13.6?;";

export const balance = (list: string): string => {
  const arr = list
    .replace(/[^a-zA-Z0-9.\n ]/g, "")
    .split("\n")
    .filter((item) => !!item);

  const listAmount = !!arr[0].match(/\d+\.\d+/g)
    ? (list.match(/\d+\.\d+/g) || []).map((n) => parseFloat(n))
    : [
        parseFloat(arr[0]),
        ...(list.match(/\d+\.\d+/g) || []).map((n) => parseFloat(n)),
      ];

  if (listAmount.length === 0) return "Original Balance: 0.00";

  const checkAmount = listAmount.slice(1);
  let balance = listAmount[0];

  const totalExpenses = checkAmount
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
  const avgExpenses =
    checkAmount.length > 0
      ? (parseFloat(totalExpenses) / checkAmount.length).toFixed(2)
      : "0.00";

  const result =
    arr
      .map((item, index) => {
        if (index === 0) {
          return `Original Balance: ${balance.toFixed(2)}`;
        } else {
          const parts = item.split(" ");
          const checkNumber = parts[0];
          const category = parts[1];
          const amount = parseFloat(parts[2]).toFixed(2);
          balance -= parseFloat(amount);

          return `${checkNumber} ${category} ${amount} Balance ${balance.toFixed(
            2
          )}`;
        }
      })
      .join("\r\n") +
    `\r\nTotal expense  ${totalExpenses}\r\nAverage expense  ${avgExpenses}`;

  return result;
};

console.log(balance(check));
