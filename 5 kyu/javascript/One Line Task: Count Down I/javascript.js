const countDown = (n) => n + 2 + `!${n + 1}!` + n;

// or
// const countDown = (n) => n + 2 + `!${-~n}!` + n;

console.log(countDown(100));
