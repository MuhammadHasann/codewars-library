const add = (a, b) => {
  let result = "";
  let carry = 0;

  a = a.split("").reverse();
  b = b.split("").reverse();

  const len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    let sum = Number(a[i] || 0) + Number(b[i] || 0) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  return carry ? carry + result : result;
};

console.log(add("123", "321"));
