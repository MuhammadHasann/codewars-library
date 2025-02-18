const kataEncode: string = "hello world!";
const kataDecode: string = "h3 th2r2";

export const encode = (kata: string): string => {
  const map: Record<string, string> = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  };
  return kata.replace(/[aeiou]/g, (char) => map[char]);
};

export const decode = (kata: string): string => {
  const map: Record<string, string> = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u",
  };
  return kata.replace(/[1-5]/g, (char) => map[char]);
};

console.log(encode(kataEncode));
console.log(decode(kataDecode));
