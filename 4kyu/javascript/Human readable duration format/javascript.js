const formatDuration = (seconds) => {
  if (seconds === 0) return "now";

  const units = [
    ["year", 365 * 24 * 60 * 60],
    ["day", 24 * 60 * 60],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1],
  ];

  let result = [];

  for (let [unit, value] of units) {
    let count = Math.floor(seconds / value);
    if (count > 0) {
      result.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
      seconds %= value;
    }
  }

  if (result.length === 1) return result[0];
  if (result.length === 2) return result.join(" and ");
  return `${result.slice(0, -1).join(", ")} and ${result[result.length - 1]}`;
};

console.log(humanDuration(315360));
