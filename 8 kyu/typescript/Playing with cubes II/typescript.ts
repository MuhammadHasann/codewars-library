export class Cube {
  private side: number;

  constructor(side: number = 0) {
    this.side = Math.abs(side);
  }

  getSide(): number {
    return this.side;
  }

  setSide(n: number): void {
    this.side = Math.abs(n);
  }
}
