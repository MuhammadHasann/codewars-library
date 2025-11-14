export const shark = (
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: boolean
): string => {
  const myTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / (!!dolphin ? sharkSpeed / 2 : sharkSpeed);

  return myTime < sharkTime ? "Alive!" : "Shark Bait!";
};
