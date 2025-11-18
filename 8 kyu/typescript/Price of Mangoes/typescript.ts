export const mango = (quantity: number, price: number): number =>
  (quantity - Math.floor(quantity / 3)) * price;
