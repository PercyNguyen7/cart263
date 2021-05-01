// Display and move the background for the FirstDecision state down to give illusion of phone dropping
class FirstDecisionBg {
  constructor() {
    this.x = width / 2;
    this.y = height / 2 + 50;
    this.width = 960;
    this.height = 720;
    this.vy = 0.7;
    this.image = firstDecisionbgImage;
  }
  // Display background
  display() {
    push();
    image(firstDecisionbgImage, this.x, this.y, this.width, this.height)
    pop();
  }
  // Move the background down
  move() {
    this.y -= this.vy
  }
}
