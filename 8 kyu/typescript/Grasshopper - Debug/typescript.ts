export const weatherInfo = (temp: number): string => {
  const celcius = Math.round((((temp - 32) * 5) / 9) * 1e5) / 1e5;

  return `${Math.round(celcius * 1e5) / 1e5} ${
    celcius >= 0 ? "is above freezing temperature" : "is freezing temperature"
  }`;
};
