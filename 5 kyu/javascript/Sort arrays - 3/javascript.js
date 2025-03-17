const kata = ["math-2401", "science-2312", "history-2401", "art-2311"];

const sortme = (kata) => {
  return kata.sort((a, b) => {
    const [nameA, dateA] = a.split("-");
    const [nameB, dateB] = b.split("-");

    if (dateA === dateB) return nameA.localeCompare(nameB);

    return dateA.localeCompare(dateB);
  });
};

console.log(sortme(kata));
