const listPeople: string =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

export const meeting = (list: string) => {
  const namesList = list
    .toUpperCase()
    .split(";")
    .map((item) => {
      const [firstName, lastName] = item.split(":");

      return [lastName, firstName];
    });

  const result = namesList
    .sort()
    .map(([lastName, firstName]) => `(${lastName}, ${firstName})`)
    .join("");

  return result;
};

console.log(meeting(listPeople));
