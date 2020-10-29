class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.height = SQUARE_SIDE;
    this.width = SQUARE_SIDE;
  }
  moveUp() {
    if (this.col <= 0) {
      return;
    }
    this.col = this.col - SQUARE_SIDE;
  }

  moveDown() {
    if (this.col >= HEIGHT - this.height) {
      return;
    }
    this.col = this.col + SQUARE_SIDE;
  }

  moveRight() {
    if (this.row >= WIDTH - this.width) {
      return;
    }
    this.row = this.row + SQUARE_SIDE;
  }

  moveLeft() {
    if (this.row <= 0) {
      return;
    }
    this.row = this.row - SQUARE_SIDE;
  }

  draw() {
    image(pic, this.row, this.col, this.width, this.height);
  }
}