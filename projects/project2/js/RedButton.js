// Red button to start the game in instruction state
class RedButton {
  constructor() {
    this.x = width / 2;
    this.y = height / 2 + 70;
    this.y2 = height / 2 + 80;
    this.size = 120;
  }
  // Display the red button out of 3 red, dark red and grey circle.
  display() {
    push();
    //Bottom grey button
    fill(40);
    ellipse(this.x, this.y2, this.size + 40);
    //Mid Dark  circle
    fill(210, 20, 10);
    ellipse(this.x, this.y2, this.size);
    // Top red circle
    fill(230, 20, 10);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
