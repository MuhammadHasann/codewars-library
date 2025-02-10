export type inputMan = {
  name: string;
  points: number;
};

export type outputMan = {
  name: string;
  points: number;
  position: number;
};

const students: inputMan[] = [
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
];

const ranking = (arr: inputMan[]): outputMan[] => {
  const sortPoint = arr
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => b.points - a.points);

  let currentPosition = 0;
  let lastPoints = 0;

  const result = sortPoint.map((item, i) => {
    if (item.points !== lastPoints) {
      currentPosition = i + 1;
      lastPoints = item.points;
    }

    return { ...item, position: currentPosition };
  });

  return result;
};

console.log(ranking(students));
