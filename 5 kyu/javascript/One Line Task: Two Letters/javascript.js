const toASCIINumber = (a, b) => +(a[(x = "charCodeAt")]() + "" + b[x]());

// or
// c = "charCodeAt";
// const toASCIINumber = (a, b) => (a[c]() + [b[c]()]) | 0;

console.log(toASCIINumber("A", "B"));
