const professions: Record<string, string> = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

export const getDrinkByProfession = (profession: string): string =>
  professions[profession.toLowerCase()]
    ? professions[profession.toLowerCase()]
    : "Beer";
