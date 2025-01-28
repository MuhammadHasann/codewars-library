String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.substr(1))
    .join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
