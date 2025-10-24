interface String {
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^[0-9]$/.test(this as string);
};
