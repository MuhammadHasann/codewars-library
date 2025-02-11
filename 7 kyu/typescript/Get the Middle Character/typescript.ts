const character: string = "middle";

const getMiddle = (kata: string): string => {
  if (!kata) return "";

  const length = kata.length;
  const mid = Math.floor(length / 2);

  return length % 2 === 0 ? kata[mid - 1] + kata[mid] : kata[mid];

  // Other ways
  // return length % 2 === 0 ? kata.slice(mid - 1, mid + 1): kata[mid]
};

console.log(getMiddle(character));
