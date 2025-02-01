const group: string[] = ["10", "20", "abc", "30"];

const toNumberArray = (stringarray: string[]) => {
  return stringarray.map(Number).filter(Number.isFinite);
};

console.log(toNumberArray(group));
