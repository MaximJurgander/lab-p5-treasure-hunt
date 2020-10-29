class Treasure {
  constructor() {
    this.height = SQUARE_SIDE;
    this.width = SQUARE_SIDE;
    this.col = randomize(this.height);
    this.row = randomize(this.width);
  }

  setRandomPosition() {
    const randomX = randomize(this.width);
    const randomY = randomize(this.height);
    this.row = randomX;
    this.col = randomY;
  }
  drawTreasure() {
    image(pic2, this.row, this.col, this.width, this.height);
  }
}

function randomize(argument) {
  return Math.floor(Math.random() * WIDTH - argument);
}