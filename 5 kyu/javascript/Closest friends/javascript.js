const phonebook = {
  John: "(555) 010-3535",
  Melissa: "(442) 130-5165",
  Jack: "(333) 010-5135",
};
const history = [
  "(555) 010-3535 00:13:24",
  "(442) 130-5165 01:36:26",
  "(333) 010-5135 01:38:24",
];

const closestFriends = (history) => {
  let durations = {};

  history.forEach((entry) => {
    const [num1, num2, time] = entry.split(" ");
    const num = `${num1} ${num2}`;
    const [hh, mm, ss] = time.split(":").map(Number);
    const durationInSeconds = hh * 3600 + mm * 60 + ss;

    durations[num] = (durations[num] || 0) + durationInSeconds;
  });

  const sortedContacts = Object.entries(durations)
    .sort((a, b) => b[1] - a[1])
    .map(([num]) =>
      Object.keys(phonebook).find((name) => phonebook[name] === num)
    )
    .slice(0, 3);

  return sortedContacts;
};

console.log(closestFriends(phonebook, history));
