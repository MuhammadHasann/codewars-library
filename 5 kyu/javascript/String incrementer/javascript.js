const kata = "foo";

const incrementString = (kata) => {
  const match = kata.match(/(\d*)$/);

  if (!match[0]) return kata + "1";

  const num = match[0];
  const text = kata.slice(0, -num.length);
  const newNum = String(Number(num) + 1).padStart(num.length, "0");

  return text + newNum;
};

console.log(incrementString(kata));
