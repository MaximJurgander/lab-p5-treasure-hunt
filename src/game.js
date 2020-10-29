class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(SQUARE_SIDE, SQUARE_SIDE);
  }
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, WIDTH); 
      line(0, i, HEIGHT, i); 
    }
  }
  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
  }
}