const withUmbrella: string[] = ["rainy", "thunderstorms"];

const weathers: string[] = [
  "rainy",
  "rainy",
  "rainy",
  "rainy",
  "thunderstorms",
  "rainy",
];

export const minUmbrellas = (weathers: string[]): number => {
  let homeUmbrella = 0;
  let workUmbrella = 0;
  let neededUmbrellas = 0;

  for (let i = 0; i < weathers.length; i++) {
    const isRainy = withUmbrella.includes(weathers[i]);

    if (i % 2 === 0) {
      if (isRainy) {
        if (homeUmbrella > 0) {
          homeUmbrella--;
        } else {
          neededUmbrellas++;
        }
        workUmbrella++;
      }
    } else {
      if (isRainy) {
        if (workUmbrella > 0) {
          workUmbrella--;
        } else {
          neededUmbrellas++;
        }
        homeUmbrella++;
      }
    }
  }

  return neededUmbrellas;
};

console.log(minUmbrellas(weathers));
