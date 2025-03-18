const numbers = [1, 2, 3];

// Without spacing
integerAverage = (a) => eval(a.join`+`) % a.length < 1;

console.log(integerAverage(numbers));
