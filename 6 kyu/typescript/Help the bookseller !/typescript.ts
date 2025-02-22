const bookList: string[] = [
  "ABART 20",
  "CDXEF 50",
  "BKWRK 25",
  "BTSQZ 89",
  "DRTYM 60",
];
const categoryList: string[] = ["A", "B", "C", "W"];

export const stockList = (books: string[], category: string[]): string => {
  if (!books.length || !category.length) return "";

  let obj: Record<string, number> = category.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: 0,
    };
  }, {});

  books.map((item) => {
    const firstWord = item.split("")[0];
    const totalBook = parseInt(item.match(/\d+/)![0]);

    if (obj[firstWord] === undefined) return obj;

    return (obj = {
      ...obj,
      [firstWord]: obj[firstWord] + totalBook,
    });
  });

  const result = Object.keys(obj).map((item) => {
    return `(${item} : ${obj[item]})`;
  });

  return result.join(" - ");
};

// Other short way
// export const stockList = (books: string[], categories: string[]): string => {
//   if (!books.length || !categories.length) return "";

//   const stock: Record<string, number> = {};
//   categories.forEach(c => stock[c] = 0);

//   books.forEach(book => {
//       const [code, count] = book.split(" ");
//       const category = code[0];

//       if (stock[category] !== undefined) {
//           stock[category] += Number(count);
//       }
//   });

//   return categories.map(c => `(${c} : ${stock[c]})`).join(" - ");
// };

console.log(stockList(bookList, categoryList));
