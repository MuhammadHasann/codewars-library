const string =
  "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

const lineupStudents = (students: string) => {
  const arr = students.split(" ");

  const orderLetter = arr.sort((a, b) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const charA = a.charCodeAt(i) || -1;
      const charB = b.charCodeAt(i) || -1;

      if (charA !== charB) return charB - charA;
    }

    return 0;
  });

  return orderLetter.sort((a, b) => b.length - a.length);
};

console.log(lineupStudents(string));
