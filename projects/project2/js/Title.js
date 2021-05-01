// The "The Extremely Silly Game" subtitle in the Menu state that breaks down if player touches (EASTERN EGG).
class Title {
  constructor() {
    // Parameters of the sub title
    this.x = width / 2;
    this.y = height / 2 + 50;
    this.y2 = height / 2 + 60;
    this.size = 120;
    this.vy = 15;
    this.r = 0;
    this.vr = 30;
    this.broken = false;
  }
  // Display title
  display() {
    push();
    // Title gets tilted to the right and stops
    this.r += this.vr;
    if (this.r >= 300) {
      this.vr = 0;
    }
    rotate(1 * radians(this.r));
    displayText(`The Extremely Silly Game`, 60, this.x, this.y, 255);
    pop();
  }
  // Move title down if it is broken
  move() {
    if (this.broken === true) {
      this.y += this.vy;
    }
    // Short space to Play sound Effect ONCE when it reaches the height of the canvas
    if (this.y >= height && this.y <= height + 5 && state === `menu`) {
      if (!titleDroppedSFX.isPlaying()) {
        titleDroppedSFX.play();
        drumSFX.play(1);
      }
    }
  }
}
