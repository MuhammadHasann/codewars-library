const kata = "3(ab)";

const solve = (s) => {
  let i = 0;

  const expand = () => {
    let res = "";

    while (i < s.length && s[i] !== ")") {
      if (/\d/.test(s[i])) {
        let num = +s[i++];
        i++;
        let str = expand();
        res += str.repeat(num);
        i++;
      } else {
        res += s[i++];
      }
    }

    return res
      .split("")
      .filter((char) => char !== "(")
      .join("");
  };

  return expand();
};

console.log(solve(kata));
