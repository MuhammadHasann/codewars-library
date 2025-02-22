var a = {
  value: 2,
  valueOf() {
    return this.value++;
  },
};

console.log(a == 2 && a == 3);
